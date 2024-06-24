import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function MeetingRoom({navigation}) {
  const handleSessionEnd = () => {
    navigation.navigate('SessionEnded');
  };
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={images.meetingTime}
          style={styles.meetingImg}
          //   resizeMode="contain"
        >
          <TouchableOpacity style={styles.phoneView} onPress={handleSessionEnd}>
            <Image source={images.phoneWhite} style={styles.phoneImg} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
