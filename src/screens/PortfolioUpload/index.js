import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../store/authToken';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../../services';

export default function PortfolioUpload() {
  const [imgUri, setImgUri] = useState(null);
  const dispatch = useDispatch();

  const handleNext = () => {
    const token = 'ijlsdakjnadskjbkjbadsbkjadskjbsadsadkjbkjb;dsa';
    dispatch(setAuthToken(token));
  };

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
        <Text style={styles.TopHeading}>Service Setup</Text>
        <Text style={styles.TopPara}>
          Setup hourly rate, description for services and your qualifications
        </Text>
        <View style={styles.middleView}>
          <TouchableOpacity onPress={uploadPhoto}>
            {imgUri ? (
              <Image source={{uri: imgUri}} style={styles.providerImgSty} />
            ) : (
              <Image
                source={images.providerImg}
                style={styles.providerImgSty}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.photoText}>Uplaod Portfolio Pictures</Text>
          <Text style={styles.hourlyText}>Hourly Rate</Text>
          <View style={styles.rateView}>
            <Text style={styles.rateViewColor}>$</Text>
            <TextInput
              placeholder="20"
              style={styles.rateViewInputField}
              keyboardType="numeric"
              textAlignVertical="center"
            />
          </View>
          <Text style={styles.TopPara1}>
            Briefly explain your experience and qualifications about this role
          </Text>
          <TextInput
            placeholder="With years of hands-on experience, our dedicated team provides
          top-notch repairs, installations, and maintenance to keep your air
          conditioning system running smoothly. Trust us to keep you cool and
          comfortable year-round."
            style={styles.TopPara2}
            placeholderTextColor={colors.black}
            multiline
          />
          <View style={styles.bottomButton}>
            <Button title={'Next'} onPress={handleNext} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
