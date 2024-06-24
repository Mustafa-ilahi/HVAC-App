import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { setRole } from '../../store/manageRole';

export default function AccountType({ navigation }) {

  const dispatch = useDispatch()

  const [changeOnClick, setChangeOnClick] = useState('');

  const handleScreenSwitch = () => {
    dispatch(setRole(changeOnClick))
    navigation.navigate('Registration');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.secondMainView}>
          <Text style={styles.headingStyle}>
            What type of account are you creating?
          </Text>
          <TouchableOpacity
            style={
              changeOnClick == 'user'
                ? styles.btnViewAfterClick
                : styles.btnView
            }
            onPress={() => setChangeOnClick('user')}>
            <Image
              source={
                changeOnClick == 'user'
                  ? images.userAfClick
                  : images.userBfClick
              }
              style={styles.userImg}
            />
            <View style={styles.textContainer}>
              <Text style={styles.serviceHeading}>Service User</Text>
              <Text style={styles.servicePara}>
                Utilize various services provided by professionals.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              changeOnClick == 'provider'
                ? styles.btnViewAfterClick
                : styles.btnView
            }
            onPress={() => setChangeOnClick('provider')}>
            <Image
              source={
                changeOnClick == 'provider'
                  ? images.providerAfClick
                  : images.providerBfClick
              }
              style={styles.userImg}
            />
            <View style={styles.textContainer}>
              <Text style={styles.serviceHeading}>Service Provider</Text>
              <Text style={styles.servicePara}>
                Provide assistance to individuals requiring help.
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonView}>
            <Button
              title={'Next'}
              disabled={!changeOnClick}
              onPress={handleScreenSwitch}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
