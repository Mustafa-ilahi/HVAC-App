import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {sizes} from '../../services';

export default function VideoSection({navigation}) {
  const [heatingVideos, setHeatingVideos] = useState([
    {
      images: images.videoImgThree,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
    {
      images: images.videoImgFour,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
    {
      images: images.videoImgThree,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
    {
      images: images.videoImgFour,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
    {
      images: images.videoImgThree,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
    {
      images: images.videoImgFour,
      service: 'Heating Service',
      description: 'Heating Installation Easy Techniques',
      by: 'By John Doe',
    },
  ]);

  const handleServiceProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <Header title={'DIY Videos'} />
        <Text style={styles.topHeading}>Popular Profiles</Text>
        <View style={styles.videoTopView}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewStyle}>
            <TouchableOpacity onPress={handleServiceProfile}>
              <Image source={images.videoImgOne} style={styles.imgStyle} />
              <View style={styles.videoCapView}>
                <Text
                  style={styles.videoCaptionOne}
                  ellipsizeMode="tail"
                  numberOfLines={3}>
                  By John Doe Instalssslation, Repairing, Maintenance & Upgrades
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.videoImgTwo} style={styles.imgStyle} />
              <View style={styles.videoCapView}>
                <Text
                  style={styles.videoCaptionOne}
                  ellipsizeMode="tail"
                  numberOfLines={3}>
                  By Simon Brooklyn Installation, Repairing, Maintenance &
                  Upgrades
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.videoImgOne} style={styles.imgStyle} />
              <View style={styles.videoCapView}>
                <Text style={styles.videoCaptionOne}>
                  By John Doe Installation, Repairing, Maintenance & Upgrades
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Text style={styles.topHeading}>Popular Videos in Heating</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {heatingVideos.map((item, index) => {
            return (
              <TouchableOpacity style={styles.popularVideos} key={index}>
                <Image source={item.images} style={styles.imagesThreeStyle} />
                <TouchableOpacity style={styles.playBtnView}>
                  <Image source={images.playBtn} style={styles.playBtnStyle} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.videoTextOne}>{item.service}</Text>
                  <Text style={styles.videoTextTwo}>{item.description}</Text>
                  <Text style={styles.videoTextThree}>{item.by}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
