import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors} from '../../services';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';
import {setAuthToken} from '../../store/authToken';

export default function SignIn({navigation}) {
  const [eyeVisible, setEyeVisible] = useState(false);
  const dispatch = useDispatch();

  const role = useSelector(getRole);
  console.log('signin-=-=', role);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPass = () => {
    navigation.navigate('EmailVerification');
  };

  const handleSignUp = () => {
    navigation.navigate('Registration');
  };

  const handleWelcomeUser = () => {
    // if (role === 'user') {
    const token = 'dsakjhadsjhlgsadhljgdsajhgldashjgdashjglajshdgsadgjh';
    dispatch(setAuthToken(token));
    // }
    // navigation.navigate('WelcomeUser');
  };

  return (
    <SafeAreaView>
      <ImageBackground source={images.loginBg} style={styles.bgImg}>
        <View style={styles.mainContainer}>
          <Text style={styles.TopHeading}>Login</Text>
          <View style={styles.textInputView}>
            <Image source={images.email} style={styles.userImg} />
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.borderGrey}
              style={styles.textInputStyle}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
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
          <TouchableOpacity onPress={handleForgotPass}>
            <Text style={styles.forgotPassText}>Forgot Passsword?</Text>
          </TouchableOpacity>
          <View style={styles.btnView}>
            <Button title={'Login'} onPress={handleWelcomeUser} />
          </View>
          <View style={styles.btmButtonText}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signInText}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
