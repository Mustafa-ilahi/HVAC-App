import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, sizes} from '../../services';
import {useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';

export default function CustomerFeedback() {
  const role = useSelector(getRole);
  console.log(role);

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
        <View style={{paddingBottom: sizes.screenWidth * 0.01}}>
          <Header title={'Customer Feedback'} showNotification={true} />
        </View>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {customerReview.map((item, index) => {
              return (
                <View style={styles.feedbackMainView} key={index}>
                  <View style={[styles.flexRow]} key={index}>
                    <Image
                      source={item.image}
                      style={styles.serverProfileImg}
                    />
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
                  {role === 'provider' && (
                    <View style={styles.commitContainer}>
                      <TextInput
                        placeholder="Reply..."
                        style={styles.inputField}
                        placeholderTextColor={colors.black}
                      />
                      <Image
                        source={images.commitArrow}
                        style={styles.arrowImg}
                      />
                    </View>
                  )}
                </View>
              );
            })}
            <View style={styles.marginBottom} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
