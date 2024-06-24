import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Button from '../../components/Button';

export default function ServiceSetup({navigation}) {
  const [onServiceSelector, setOnServiceSelector] = useState();

  const handleNext = () => {
    navigation.navigate('PortfolioUpload');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.TopHeading}>Service Setup</Text>
        <Text style={styles.TopPara}>
          Select the service you want to provide
        </Text>
        <View style={styles.middleMainView}>
          <TouchableOpacity
            style={
              onServiceSelector == 'ac'
                ? styles.containerViewAfterClick
                : styles.containerView
            }
            onPress={() => setOnServiceSelector('ac')}>
            <Image
              source={onServiceSelector == 'ac' ? images.newAc : images.newAcBf}
              style={styles.middleViewImgStyle}
            />
            <Text
              style={
                onServiceSelector == 'ac'
                  ? styles.itemText
                  : styles.itemTextWithoutColor
              }>
              AC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              onServiceSelector == 'vent'
                ? styles.containerViewAfterClick
                : styles.containerView
            }
            onPress={() => setOnServiceSelector('vent')}>
            <Image
              source={
                onServiceSelector == 'vent' ? images.newVent : images.newVentBf
              }
              style={styles.middleViewImgStyle}
            />
            <Text
              style={
                onServiceSelector == 'vent'
                  ? styles.itemText
                  : styles.itemTextWithoutColor
              }>
              Ventilation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              onServiceSelector == 'heat'
                ? styles.containerViewAfterClick
                : styles.containerView
            }
            onPress={() => setOnServiceSelector('heat')}>
            <Image
              source={
                onServiceSelector == 'heat'
                  ? images.newExhaust
                  : images.newExhaustBf
              }
              style={styles.middleViewImgStyle}
            />
            <Text
              style={
                onServiceSelector == 'heat'
                  ? styles.itemText
                  : styles.itemTextWithoutColor
              }>
              Heating
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButton}>
          <Button
            disabled={!onServiceSelector}
            title={'Next'}
            onPress={handleNext}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
