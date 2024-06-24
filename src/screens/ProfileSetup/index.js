import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, PermissionsIOS} from 'react-native';
import {useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';

export default function ProfileSetup({navigation}) {
  const role = useSelector(getRole);

  const [imgUri, setImgUri] = useState(null);

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.warn('Camera permission denied');
    }
  };

  const uploadPhoto = async sourceType => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 800,
      maxHeight: 600,
      includeBase64: false,
      saveToPhotos: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    if (sourceType === 'library') {
      launchImageLibrary(options, response => {
        console.log('Library Response:', response);

        try {
          const uri =
            response.uri || (response.assets && response.assets[0].uri);
          if (uri) {
            setImgUri(uri);
          } else {
            console.warn('No image URI found in library response');
          }
        } catch (error) {
          console.error('Error setting imgUri:', error);
        }
      });
    } else if (sourceType === 'camera') {
      await requestCameraPermission();

      launchCamera(options, response => {
        console.log('** Full Camera Response:**', response.assets[0].uri);
        try {
          const uri = response.assets[0].uri;
          if (!uri) {
            const cameraResponseUri = response.path || response.uri;
            if (cameraResponseUri) {
              console.log('Using alternative camera URI:', cameraResponseUri);
              setImgUri(cameraResponseUri);
            } else {
              console.log('No image URI found in camera response');
            }
          } else {
            setImgUri(uri);
          }
        } catch (error) {
          console.error('Error setting imgUri:', error);
        }
      });
    }
  };

  const handleWelcomeUser = () => {
    if (role === 'user') {
      navigation.navigate('WelcomeUser');
    }
    if (role === 'provider') {
      navigation.navigate('ServiceSetup');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.padding}>
          <Text style={styles.headingStyle}>Profile Setup</Text>
          <Text style={styles.headingTextStyle}>
            Upload your profile picture here
          </Text>
          <View>
            {imgUri ? (
              <Image source={{uri: imgUri}} style={styles.imgStyle} />
            ) : (
              <Image source={images.userImgUpload} style={styles.imgStyle} />
            )}
          </View>
          <TouchableOpacity
            style={styles.clickPhotoMainView}
            onPress={() => uploadPhoto('camera')}>
            <Image source={images.camera} style={styles.cameraImg} />
            <Text style={styles.colorText}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clickPhotoMainView}
            onPress={() => uploadPhoto('library')}>
            <Image source={images.gallery} style={styles.cameraImg} />
            <Text style={styles.colorText}>Choose picture from gallery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btmButton}>
          <Button title={'Next'} onPress={handleWelcomeUser} />
        </View>
      </View>
    </SafeAreaView>
  );
}
