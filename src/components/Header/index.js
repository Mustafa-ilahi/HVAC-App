import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useNavigation} from '@react-navigation/native';

export default function Header({title, showNotification}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerMainView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.backArrow} style={styles.headerImgOne} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>{title}</Text>
        {showNotification ? null : (
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={images.notification} style={styles.headerImgTwo} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
