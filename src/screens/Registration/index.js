import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors} from '../../services';
import Button from '../../components/Button';
import {useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';

export default function Registration({navigation}) {
  const role = useSelector(getRole);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [eyeVisible, setEyeVisible] = useState(false);

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleAccountVerification = () => {
    navigation.navigate('AccountVerification');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={images.registrationBg} style={styles.bgImage}>
          <View style={styles.mainContainer}>
            <Text style={styles.TopHeading}>Register</Text>
            <View style={styles.textInputView}>
              <Image source={images.user} style={styles.userImg} />
              <TextInput
                placeholder="Name"
                placeholderTextColor={colors.borderGrey}
                style={styles.textInputStyle}
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
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
              <Image source={images.call} style={styles.userImg} />
              <TextInput
                placeholder="Mobile#"
                placeholderTextColor={colors.borderGrey}
                style={styles.textInputStyle}
                keyboardType="numeric"
                value={phone}
                onChangeText={text => setPhone(text)}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={images.location} style={styles.userImg} />
              <TextInput
                placeholder="Location"
                placeholderTextColor={colors.borderGrey}
                style={styles.textInputStyle}
                value={location}
                onChangeText={text => setLocation(text)}
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
            <View style={styles.btnView}>
              <Button title={'Sign Up'} onPress={handleAccountVerification} />
            </View>
            <View style={styles.btmButtonText}>
              <Text style={styles.bottomText}>Already have an account?</Text>
              <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.signInText}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
