import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {colors} from '../../services';
import images from '../../services/utilities/images';

export default function Security({navigation}) {
  const [eyeVisible, setEyeVisible] = useState(false);
  const [eyeVisibleOne, setEyeVisibleOne] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.header}>Security</Text>
        <Text style={styles.header1}>
          Make a strong password to improve security.
        </Text>
        <View style={styles.profileMainView}>
          <Image source={images.lock} style={styles.profileEditSymbols} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.textGrey}
            style={styles.profileEditText}
            secureTextEntry={eyeVisible ? false : true}
          />
          <TouchableOpacity onPress={() => setEyeVisible(!eyeVisible)}>
            <Image
              source={eyeVisible ? images.eyeIconOn : images.eyeOff}
              style={styles.userImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileMainView}>
          <Image source={images.lock} style={styles.profileEditSymbols} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={colors.textGrey}
            style={styles.profileEditText}
            secureTextEntry={eyeVisibleOne ? false : true}
          />
          <TouchableOpacity onPress={() => setEyeVisibleOne(!eyeVisibleOne)}>
            <Image
              source={eyeVisibleOne ? images.eyeIconOn : images.eyeOff}
              style={styles.userImg}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.bottomButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
