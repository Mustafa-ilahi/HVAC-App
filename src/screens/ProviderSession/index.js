import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function ProviderSession({navigation}) {
  const [customerReview, setCustomerReview] = useState([
    {
      image: images.serverProfileImg,
      name: 'James Andrew',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: images.serverProfileImgOne,
      name: 'Emily Smith',
      Description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]);
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={[styles.flexRow, styles.headerMainView]}>
          <View>
            <Text style={styles.headerHeading}>
              Hello
              <Text style={{fontWeight: 'bold'}}> Joyful HVAC Services</Text>
            </Text>
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
              <Image source={images.locationBlue} style={styles.headerImgOne} />
              <Text style={styles.headerLocation}>
                Street 11 Block 19, Maplewood, New ....
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={images.notification} style={styles.headerImgTwo} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topVideoView}>
            <View style={styles.videoMainView}>
              <Image source={images.videoOn} style={styles.videoStyle} />
              <Text style={styles.videoSessionText}>Missed Sessions</Text>
              <Text style={styles.videoSessionText1}>
                You have missed 03 sessions
              </Text>
            </View>
            <View style={styles.videoMainView}>
              <Image source={images.videoOn} style={styles.videoStyle} />
              <Text style={styles.videoSessionText}>Missed Sessions</Text>
              <Text style={styles.videoSessionText1}>
                You have missed 03 sessions
              </Text>
            </View>
          </View>
          <View style={styles.ratingView}>
            <Image source={images.ratingImg} style={styles.ratingImgSty} />
          </View>
          <View style={styles.graphView}>
            <Image source={images.groupText} style={styles.ratingImgSty1} />
            <Image source={images.group} style={styles.ratingImgSty1} />
          </View>
          <Text style={styles.customerText}>Customer Feedback</Text>
          <View>
            {customerReview.map((item, index) => {
              return (
                <View
                  style={[styles.flexRow, styles.feedbackMainView]}
                  key={index}>
                  <Image source={item.image} style={styles.serverProfileImg} />
                  <View style={styles.feedbackLeftView}>
                    <Text style={styles.feedbackSection}>{item.name}</Text>
                    <Text style={styles.feedbackSectionOne} numberOfLines={3}>
                      {item.Description}
                    </Text>
                    <Text style={styles.ratedText}>Rated</Text>
                    <View style={[styles.flexRow, {alignItems: 'center'}]}>
                      <Image source={images.star} style={styles.starImg} />
                      <Text style={styles.ratingTextOne}>4.8 Ratings</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <TouchableOpacity style={styles.viewAllStyle}
          onPress={() => navigation.navigate('CustomerFeedback')}
          >
            <Text style={styles.viewText}>View All</Text>
            <Image source={images.arrowBlue} style={styles.arrowViewStyle} />
          </TouchableOpacity>
          <View style={styles.marginBottom} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
