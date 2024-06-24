import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../../services/utilities/images';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';
import {selectAuthToken} from '../../store/authToken';

export default function LandingPage({navigation}) {
  const role = useSelector(getRole);
  const authToken = useSelector(selectAuthToken);

  const handleAccountType = () => {
    navigation.navigate('AccountType');
  };
  return (
    <SafeAreaView>
      <ImageBackground source={images.landingPageBg} style={styles.bgImg}>
        <View style={styles.mainView}>
          <Image source={images.landingPageImg} style={styles.landingPgImg} />
          <View style={styles.margin}>
            <Text style={styles.headingStyling}>Your All-in-One Solution</Text>
            <Text style={styles.paraStyling}>
              Discover everything you need in one {'\n'}app: from experts to
              home
              {'\n'}improvements.
            </Text>
          </View>
          <TouchableOpacity style={styles.btnView} onPress={handleAccountType}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
