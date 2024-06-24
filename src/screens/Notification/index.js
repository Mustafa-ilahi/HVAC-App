import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {sizes} from '../../services';

export default function Notification() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Notifications'} showNotification={true} />
        <View style={{marginTop: sizes.screenHeight * 0.03}}>
          <View style={styles.notiView}>
            <Image source={images.serviceImg} style={styles.imgStyle} />
            <View style={{marginLeft: sizes.screenWidth * 0.02}}>
              <Text style={styles.notiText}>Jouful HVAC Services</Text>
              <Text style={styles.notiText1}>Replied your message</Text>
            </View>
            <Text style={styles.notiText2}>2m ago</Text>
          </View>
          <View style={styles.notiView}>
            <Image source={images.videoOne} style={styles.imgStyle} />
            <View style={{marginLeft: sizes.screenWidth * 0.02}}>
              <Text style={styles.notiText}>Join Your Session!</Text>
              <Text style={styles.notiText1}>
                Your service provider is waiting for you.
              </Text>
            </View>
            <Text style={styles.notiText2}>2m ago</Text>
          </View>
          <View style={styles.notiView}>
            <Image source={images.check} style={styles.imgStyle} />
            <View style={{marginLeft: sizes.screenWidth * 0.02}}>
              <Text style={styles.notiText}>Request Accepted</Text>
              <Text style={styles.notiText1}>
                The Service provider has accepted your request for service.
              </Text>
            </View>
            <Text style={styles.notiText2}>2m ago</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
