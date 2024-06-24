import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Button({onPress, title, disabled, arrow}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={disabled ? styles.buttonViewDisabled : styles.buttonView}
        onPress={onPress}
        disabled={disabled}>
        <Text style={disabled ? styles.buttonTextDisabled : styles.buttonText}>
          {title}
        </Text>
        {arrow && <Image source={images.arrowWhite} style={styles.arrowImg} />}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
