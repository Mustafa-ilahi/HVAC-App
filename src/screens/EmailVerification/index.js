import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';

export default function EmailVerification({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('ForgotPassword');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.mainContentView}>
          <Text style={styles.headingText}>Email Verification</Text>
          <Text style={styles.headingPara}>
            Enter email address on which you want to receive your Verification
            code.
          </Text>
        </View>
        <View style={styles.textInputMainView}>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.borderGrey}
              style={styles.textInputStyle}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <Button title={'Next'} onPress={handleSignIn} />
        </View>
      </View>
    </SafeAreaView>
  );
}
