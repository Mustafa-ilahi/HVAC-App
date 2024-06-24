import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {sizes} from '../../services';

export default function ChatInbox({navigation}) {
  const handleChat = () => {
    navigation.navigate('Chat');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Chats'} showNotification={true} />
        <TouchableOpacity style={styles.notiView} onPress={handleChat}>
          <Image source={images.serviceImg} style={styles.imgStyle} />
          <View style={{marginLeft: sizes.screenWidth * 0.02}}>
            <Text style={styles.notiText}>
              Jouful HVAC Services<Text style={styles.blue}> ● 1h Ago</Text>
            </Text>
            <Text style={styles.notiText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notiView} onPress={handleChat}>
          <Image source={images.serviceImg} style={styles.imgStyle} />
          <View style={{marginLeft: sizes.screenWidth * 0.02}}>
            <Text style={styles.notiText}>
              Jouful HVAC Services<Text style={styles.blue}> ● 1h Ago</Text>
            </Text>
            <Text style={styles.notiText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notiView} onPress={handleChat}>
          <Image source={images.serviceImg} style={styles.imgStyle} />
          <View style={{marginLeft: sizes.screenWidth * 0.02}}>
            <Text style={styles.notiText}>
              Jouful HVAC Services<Text style={styles.blue}> ● 1h Ago</Text>
            </Text>
            <Text style={styles.notiText1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
