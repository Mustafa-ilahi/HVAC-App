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
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

export default function SessionDetails({navigation}) {
  const handleModalTime = () => {
    setIsModalVisisble(!isModalVisisble);
  };

  const handleModalToggle = () => {
    setIsModalVisisble(false);
    setTimeout(() => {
      navigation.navigate('Payment');
    }, 500);
  };

  const [isModalVisisble, setIsModalVisisble] = useState(false);
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
        <Header title={'Session Details'} showNotification={true} />
        <Text style={styles.sessionText}>
          Submit Issue Details & Media, Pay in Advance for Session.
        </Text>
        <Text style={styles.sessionOptionalText}>Add Images (optional)</Text>
        <TouchableOpacity onPress={uploadPhoto}>
          {imgUri ? (
            <Image source={{uri: imgUri}} style={styles.sessionImg} />
          ) : (
            <Image source={images.sessionImg} style={styles.sessionImg} />
          )}
        </TouchableOpacity>
        <View style={styles.issueMainView}>
          <Image
            source={images.serverProfileImg}
            style={styles.serverProfileImg}
          />
          <View style={styles.textView}>
            <Text style={styles.sessionIssueName}>Michael Bernando</Text>
            <TextInput
              placeholder="Issue Description...."
              placeholderTextColor={colors.gray}
              style={styles.sessionIssue}
              multiline
            />
          </View>
        </View>
        <View style={styles.bottomButton}>
          <Button title={'Book Session'} onPress={handleModalTime} />
        </View>
      </View>
      <Modal
        isVisible={isModalVisisble}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutDown'}>
        <View style={styles.modalMainView}>
          <View style={styles.secondModalView}>
            <Image source={images.tick} style={styles.tickImg} />
            <Text style={styles.modalText1}>Booking Request Sent!</Text>
            <Text style={styles.modalText2}>
              Service provider has received the booking request and will get
              back to you shortly.
            </Text>
            <TouchableOpacity
              style={styles.modalBottmButton}
              onPress={handleModalToggle}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
