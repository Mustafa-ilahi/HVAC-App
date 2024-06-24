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

export default function Payment({navigation}) {
  const handleAddCard = () => {
    navigation.navigate('AddCard');
  };

  const handlePay = () => {
    navigation.navigate('PaymentDetails');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'Payment'} showNotification={true} />
        <View style={styles.topView}>
          <View>
            <Text style={styles.topViewText}>Payment</Text>
            <Text style={styles.topViewText1}>Credit / Debit Cards</Text>
          </View>
          <TouchableOpacity style={styles.buttonFlex} onPress={handleAddCard}>
            <Image source={images.money} style={styles.moneyImg} />
            <Text style={styles.cardText}>Add new Card</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.masterCardInputField}>
          <Image source={images.mastercard} style={styles.imgStyling} />
          <Text style={styles.textInput}>************6489</Text>
          <TouchableOpacity>
            <Image source={images.backArrow} style={styles.imgStyling1} />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.topViewText}>More Options</Text>
        <View style={styles.flexRow}>
          <Image source={images.credit} style={styles.imgStyling} />
          <Text style={styles.topViewText1}>Credit / Debit Cards</Text>
        </View>
        <View style={styles.bottmButton}>
          <Button title={'Next'} onPress={handlePay} />
        </View>
      </View>
    </SafeAreaView>
  );
}
