import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {styles} from './style';
import {fontSize} from '../../services';
import Button from '../../components/Button';

export default function PaymentDetails({navigation}) {
  const handlePayed = () => {
    navigation.navigate('MyTabs');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Payment Details'} showNotification={true} />
        <View style={[styles.flexRow, styles.feedbackMainView]}>
          <Image source={images.servicesImg} style={styles.serverProfileImg} />
          <View style={styles.feedbackLeftView}>
            <Text style={styles.feedbackSection}>AC Maintenance Service</Text>
            <Text style={styles.ratedText}>AC Service</Text>
            <View style={styles.bottomView}>
              <View style={styles.timeDuration}>
                <Text style={styles.textColor}>45 min</Text>
              </View>
              <Text style={styles.ratingTextOne}>$20/hr</Text>
            </View>
          </View>
        </View>
        <View style={styles.hori}></View>
        <View style={styles.rowHeadings}>
          <Text style={styles.sessionText}>Session Time</Text>
          <Text style={styles.sessionText1}>2:00 ● 14 July</Text>
        </View>
        <View style={styles.hori}></View>
        <View style={styles.rowHeadings}>
          <Text style={styles.sessionText2}>Total Hours</Text>
          <Text style={styles.sessionText2}>1 hour</Text>
        </View>
        <View style={styles.rowHeadings1}>
          <Text style={styles.sessionText2}>Service Charges</Text>
          <Text style={styles.sessionText3}>$20.00</Text>
        </View>
        <View style={styles.hori}></View>
        <View style={styles.rowHeadings1}>
          <Text style={styles.sessionText3}>Service Charges</Text>
          <Text style={styles.sessionText3}>$20.00</Text>
        </View>
        <View style={styles.bottomButton}>
          <Button title={'Pay Now'} onPress={handlePayed} />
        </View>
      </View>
    </SafeAreaView>
  );
}
