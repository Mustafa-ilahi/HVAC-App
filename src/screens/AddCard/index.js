import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';

export default function AddCard({navigation}) {
  const handlePay = () => {
    navigation.navigate('Payment');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Add Card'} showNotification={true} />
        <Image source={images.creditCart} style={styles.creditCard} />
        <View style={styles.inputFieldRow}>
          <Image
            source={images.creditCardImg}
            style={styles.creditCardImgStyle}
          />
          <TextInput
            placeholder="Credit Card Number"
            placeholderTextColor={colors.grayBorder}
            style={styles.textInput}
          />
        </View>
        <TextInput
          placeholder="Billing Name"
          placeholderTextColor={colors.grayBorder}
          style={[styles.textInput, styles.inputFieldRow]}
        />
        <View style={styles.fledRow}>
          <View style={styles.bottomView}>
            <Image source={images.calendar} style={styles.creditCardImgStyle} />
            <TextInput
              placeholder="Exp Date"
              placeholderTextColor={colors.grayBorder}
              style={styles.textInputOne}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.bottomView}>
            <TextInput
              placeholder="CVV"
              placeholderTextColor={colors.grayBorder}
              style={styles.textInputOne}
              keyboardType="numeric"
            />
          </View>
        </View>
        {/* {role === 'provider' && (
          <View style={styles.bottmButton}>
            <Button
              title={'Save Card'}
              onPress={() => navigation.navigate('profile')}
            />
          </View>
        )} */}
        <View style={styles.bottmButton}>
          <Button title={'Save Card'} onPress={handlePay} />
        </View>
      </View>
    </SafeAreaView>
  );
}
