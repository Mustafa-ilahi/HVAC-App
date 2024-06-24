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

export default function UserHome({navigation}) {
  const [videoList, setVideoList] = useState([
    {title: 'Changing Air Filters', heart: '12k', views: '30.1k'},
    {title: 'Changing Air Filters', heart: '12k', views: '30.1k'},
    {title: 'Changing Air Filters', heart: '12k', views: '30.1k'},
    {title: 'Changing Air Filters', heart: '12k', views: '30.1k'},
  ]);

  const handleDIYVideos = () => {
    navigation.navigate('VideoSection');
  };

  const handleServices = () => {
    navigation.navigate('ServiceSection');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={[styles.flexRow, styles.headerMainView]}>
          <View>
            <Text style={styles.headerHeading}>
              Hello <Text style={{fontWeight: 'bold'}}>Michael</Text>
            </Text>
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
              <Image source={images.locationBlue} style={styles.headerImgOne} />
              <Text style={styles.headerLocation}>
                Street 11 Block 19, Maplewood, New ....
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={images.notification} style={styles.headerImgTwo} />
          </TouchableOpacity>
        </View>
        <Text style={styles.topHeading}>Services</Text>
        <View style={[styles.flexRow, {gap: 3, alignItems: 'center'}]}>
          <View>
            <Image source={images.userImgOne} style={styles.imgOne} />
            <View style={styles.serviceTextMainView}>
              <Text style={styles.serviceHeadingStyle}>Heating Services</Text>
              <TouchableOpacity
                style={styles.serviceBtn}
                onPress={handleServices}>
                <Text style={styles.serviceBtnText}>See Services</Text>
                <View style={styles.imgView}>
                  <Image
                    source={images.arrowWhite}
                    style={styles.arrowStyling}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{gap: 5}}>
            <View>
              <Image source={images.userImgTwo} style={styles.imgTwo} />
              <View style={styles.serviceTextMainViewTwo}>
                <Text style={styles.serviceHeadingStyleTwo}>
                  Ventilation Serices
                </Text>
                <TouchableOpacity style={styles.serviceBtnTwo}>
                  <Text style={styles.serviceBtnTextTwo}>See Services</Text>
                  <View style={styles.imgViewTwo}>
                    <Image
                      source={images.arrowWhite}
                      style={styles.arrowStylingTwo}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image source={images.userImgThree} style={styles.imgTwo} />
              <View style={styles.serviceTextMainViewTwo}>
                <Text style={styles.serviceHeadingStyleTwo}>AC Serices</Text>
                <TouchableOpacity style={styles.serviceBtnTwo}>
                  <Text style={styles.serviceBtnTextTwo}>See Services</Text>
                  <View style={styles.imgViewTwo}>
                    <Image
                      source={images.arrowWhite}
                      style={styles.arrowStylingTwo}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.videoHeadingView}>
          <Text style={styles.videoView}>DIY Videos</Text>
          <TouchableOpacity
            style={styles.viewAllStyle}
            onPress={handleDIYVideos}>
            <Text style={styles.viewText}>View All</Text>
            <Image source={images.arrowBlue} style={styles.arrowViewStyle} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {videoList.map((item, index) => {
              return (
                <View key={index} style={styles.videoMainView}>
                  <Image source={images.video} style={styles.videoImg} />
                  <TouchableOpacity style={styles.playBtnView}>
                    <Image source={images.playBtn} style={styles.playBtnImg} />
                  </TouchableOpacity>
                  <Text style={styles.videoTitle}>{item.title}</Text>
                  <View style={[styles.flexRow, {alignItems: 'center'}]}>
                    <Image source={images.heart} style={styles.imgHeartView} />
                    <Text style={styles.ratingText}>{item.heart}</Text>
                    <Image
                      source={images.view}
                      style={styles.imgHeartViewOne}
                    />
                    <Text style={styles.ratingText}>{item.views}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
