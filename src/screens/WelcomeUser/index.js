import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import React from 'react';
import images from '../../services/utilities/images';
import { styles } from './style';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../store/authToken';

export default function WelcomeUser({ navigation }) {

  const dispatch = useDispatch()

  const handleUser = () => {
    const token = 'ijlsdakjnadskjbkjbadsbkjadskjbsadsadkjbkjb;dsa'
    dispatch(setAuthToken(token))
  };

  return (
    <SafeAreaView>
      <ImageBackground source={images.welcomeBg} style={styles.bgImg}>
        <View style={styles.mainContainer}>
          <Image source={images.welcomeUserProfile} style={styles.profileImg} />
          <Text style={styles.headingStyle}>You're All Set!</Text>
          <Text style={styles.paraStyle}>
            Welcome to HVAC Services Michael Bernando
          </Text>
        </View>
        <View style={styles.bottmBtn}>
          <Button title={'Get Started!'} onPress={handleUser} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
