import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';

export default function SessionEnded({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Image source={images.phoneDown} style={styles.phoneImg} />
        <Text style={styles.heading}>Session Ended</Text>
        <Text style={styles.para}>
          We hope you found this session helpful. Your feedback is valuable to
          us. Please consider leaving a review to help us improve our services.
        </Text>
        <Image source={images.bigStars} style={styles.starImg} />
        <View style={styles.textField}>
          <TextInput
            placeholder="Give your feedback..."
            placeholderTextColor={colors.black}
            style={styles.textInput}
            multiline
          />
        </View>
        <View style={styles.bottomBtn}>
          <Button
            title={'Continue'}
            onPress={() => navigation.navigate('Session')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
