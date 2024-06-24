import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function WatchVideos({navigation}) {
  const handleWatchVideo = () => {
    navigation.navigate('VideoSection');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'DIY Videos'} />
        <Text style={styles.topHeading}>Popular Profiles</Text>
        <Image source={images.removedByVideo} style={styles.videoImg} />
        <Text style={styles.tipsText}>Tips</Text>
        <Text style={styles.tip}>
          <Text style={styles.tipsTextColor}>Tip 1:</Text> Start by cleaning or
          replacing air filters to improve airflow and efficiency.
        </Text>
        <Text style={styles.tip}>
          <Text style={styles.tipsTextColor}>Tip 2:</Text> Check for blocked
          vents and remove any obstructions to allow proper air circulation.
        </Text>
        <Text style={styles.tip}>
          <Text style={styles.tipsTextColor}>Tip 3:</Text> Inspect the condenser
          coils for dirt and debris, clean with a soft brush or vacuum to
          maintain optimal performance.
        </Text>
        <Text style={styles.tip}>
          <Text style={styles.tipsTextColor}>Tip 4:</Text> Test the thermostat
          and replace batteries if necessary to ensure accurate temperature
          control.
        </Text>
        <Text style={styles.tip}>
          <Text style={styles.tipsTextColor}>Tip 5:</Text> If you suspect a
          refrigerant leak, do not attempt to recharge the system – contact a
          licensed technician for assistance.
        </Text>
        <View style={styles.bottmBtn}>
          <Button
            title={'Watch more Videos'}
            arrow={true}
            onPress={handleWatchVideo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
