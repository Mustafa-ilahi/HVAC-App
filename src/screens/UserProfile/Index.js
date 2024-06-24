import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import Button from '../../components/Button';
import {sizes} from '../../services';

export default function UserProfile({navigation}) {
  const handleWatchVideo = () => {
    navigation.navigate('WatchVideos');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header title={'DIY Videos'} />
        <ImageBackground
          resizeMode="contain"
          source={images.videoImgOne}
          style={styles.videoPoster}>
          <Text
            style={styles.videoCaptionOne}
            ellipsizeMode="tail"
            numberOfLines={3}>
            By John Doe Installation, Repairing, Maintenance & Upgrades
          </Text>
        </ImageBackground>
        <View style={styles.bottomBtn}>
          <Button
            title={'Watch Video'}
            arrow={true}
            onPress={handleWatchVideo}
          />
        </View>
        <Text style={styles.color}>DIY Images</Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={images.diyImg} style={styles.imgStyle} />
            <Image source={images.diyImgOne} style={styles.imgStyle} />
            <Image source={images.diyImgTwo} style={styles.imgStyle} />
          </ScrollView>
        </View>
        <Text style={styles.color}>Warnings</Text>
        <View style={styles.warningView}>
          <View style={styles.singleWarning}>
            <Image source={images.warning} style={styles.warningImg} />
            <Text style={styles.warningTitle}>Electrical shock hazard</Text>
          </View>
          <View style={styles.singleWarning}>
            <Image source={images.warning} style={styles.warningImg} />
            <Text style={styles.warningTitle}>High Voltage Risk</Text>
          </View>
          <View style={styles.singleWarning}>
            <Image source={images.warning} style={styles.warningImg} />
            <Text style={styles.warningTitle}>Handling Refrigerant</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
