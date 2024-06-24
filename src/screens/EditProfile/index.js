import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';

export default function EditProfile({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [imgUri, setImgUri] = useState(null);

  const uploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        // alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        setImgUri(res.assets[0].uri);
      }
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Edit Profile</Text>
        <View>
          {imgUri ? (
            <Image source={{uri: imgUri}} style={styles.profileImg} />
          ) : (
            <Image
              source={images.welcomeUserProfile}
              style={styles.profileImg}
            />
          )}
          <TouchableOpacity style={styles.profileImgView} onPress={uploadPhoto}>
            <Image source={images.galleryChange} style={styles.profileImg1} />
          </TouchableOpacity>
          <View style={styles.profileMainView}>
            <Image source={images.profile} style={styles.profileEditSymbols} />
            <TextInput
              placeholder="Name"
              placeholderTextColor={colors.textGrey}
              style={styles.profileEditText}
              value={name}
              onChange={text => setName(text)}
            />
          </View>
          <View style={styles.profileMainView1}>
            <Image source={images.email} style={styles.profileEditSymbols} />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.textGrey}
              style={styles.profileEditText}
              value={email}
              onChange={text => setEmail(text)}
            />
          </View>
          <View style={styles.profileMainView1}>
            <Image source={images.call} style={styles.profileEditSymbols} />
            <TextInput
              placeholder="Mobile"
              placeholderTextColor={colors.textGrey}
              style={styles.profileEditText}
              keyboardType="numeric"
              value={mobileNumber}
              onChange={text => setMobileNumber(text)}
            />
          </View>
          <View style={styles.profileMainView1}>
            <Image source={images.location} style={styles.profileEditSymbols} />
            <TextInput
              placeholder="Location"
              placeholderTextColor={colors.textGrey}
              style={styles.profileEditText}
              value={location}
              onChange={text => setLocation(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.bottomButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
