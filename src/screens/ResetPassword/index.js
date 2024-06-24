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

export default function ResetPassword({navigation}) {
  const [eyeVisible, setEyeVisible] = useState(false);
  const [eyeVisibleOne, setEyeVisibleOne] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.mainContentView}>
          <Text style={styles.headingText}>Reset Password?</Text>
          <Text style={styles.headingPara}>
            Enter a new password to reset the password of your account.
          </Text>
        </View>
        <View style={styles.textInputMainView}>
          <View style={styles.textInputView}>
            <Image source={images.passwordIcon} style={styles.userImg} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.borderGrey}
              style={styles.textInputStyle}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={eyeVisible ? false : true}
            />
            <TouchableOpacity onPress={() => setEyeVisible(!eyeVisible)}>
              <Image
                source={eyeVisible ? images.eyeIconOn : images.eyeOff}
                style={styles.userImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputView}>
            <Image source={images.passwordIcon} style={styles.userImg} />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={colors.borderGrey}
              style={styles.textInputStyle}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              secureTextEntry={eyeVisibleOne ? false : true}
            />
            <TouchableOpacity onPress={() => setEyeVisibleOne(!eyeVisibleOne)}>
              <Image
                source={eyeVisibleOne ? images.eyeIconOn : images.eyeOff}
                style={styles.userImg}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <Button title={'Next'} onPress={handleSignIn} />
        </View>
      </View>
    </SafeAreaView>
  );
}
