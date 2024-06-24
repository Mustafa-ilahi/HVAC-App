import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';

export default function PaymentMethod({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Payment Method</Text>
        <Text style={styles.header1}>
          Select or modify your payment method.
        </Text>
        <TouchableOpacity style={styles.flexRow}>
          <Image source={images.credit} style={styles.imgStyling} />
          <Text style={styles.topViewTopText}>Credit / Debit Cards</Text>
          <Image source={images.add} style={styles.imgStyling} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexRow}>
          <Image source={images.mastercard} style={styles.imgStyling} />
          <Text style={styles.topViewTopText}>Master Card</Text>
          <Image source={images.add} style={styles.imgStyling} />
        </TouchableOpacity>
        <Text style={styles.topViewTopText1}>Current Payment Method</Text>
        <View style={styles.topView}>
          <Text style={styles.topViewText1}>Credit / Debit Cards</Text>
          <TouchableOpacity
            style={styles.buttonFlex}
            onPress={() => navigation.navigate('AddCard')}>
            <Image source={images.money} style={styles.moneyImg} />
            <Text style={styles.cardText}>Add new Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.masterCardInputField}>
          <Image source={images.mastercard} style={styles.imgStyling} />
          <View style={styles.textInput}>************6489</View>
          <TouchableOpacity>
            <Image source={images.backArrow} style={styles.imgStyling1} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
