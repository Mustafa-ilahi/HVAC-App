import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import ImageSLider from '../../components/ImageSlider';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';

export default function ServiceMainPage({navigation}) {
  const [onClickToggle, setonClickToggle] = useState('about');
  const [productImages, setProductImages] = useState([
    images.servicesImg,
    images.servicesImg,
    images.servicesImg,
  ]);

  const [portfolio, setPortfolio] = useState([
    {images: images.acServiceTwo, name: 'AC Maintenance'},
    {images: images.heating, name: 'Heating Installation'},
    {images: images.vending, name: 'Ventilation Service'},
    {images: images.acServiceTwo, name: 'AC Maintenance'},
    {images: images.heating, name: 'Heating Installation'},
    {images: images.vending, name: 'Ventilation Service'},
  ]);

  const handleFeedback = () => {
    navigation.navigate('CustomerFeedback');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.paddingLeft}>
          <Header title={'Heating Services'} />
        </View>
        <View style={styles.imgSlider}>
          <ImageSLider productImages={productImages} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewPadding}>
            <Text style={styles.topHeading}>AC Maintenance Service</Text>
            <View style={styles.flexRow}>
              <Image source={images.locationBlue} style={styles.locationImg} />
              <Text style={styles.locationText}>
                Street 11 Block 19, Maplewood, New Jersey, 07040, USA
              </Text>
            </View>
            <Text style={styles.ratingText}>Ratings</Text>
            <Image source={images.starRating} style={styles.rating} />
            <View style={styles.horizontalLine}></View>
            <View style={styles.flexRow2}>
              <TouchableOpacity
                style={
                  onClickToggle === 'about'
                    ? styles.aboutViewStyling
                    : styles.aboutViewWithoutStyling
                }
                onPress={() => setonClickToggle('about')}>
                <Text
                  style={
                    onClickToggle === 'about'
                      ? styles.textStyle
                      : styles.textStyleWithColor
                  }>
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setonClickToggle('service')}
                style={
                  onClickToggle === 'service'
                    ? styles.aboutViewStyling
                    : styles.aboutViewWithoutStyling
                }>
                <Text
                  style={
                    onClickToggle === 'service'
                      ? styles.textStyle
                      : styles.textStyleWithColor
                  }>
                  Service
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setonClickToggle('feedback')}
                style={
                  onClickToggle === 'feedback'
                    ? styles.aboutViewStyling
                    : styles.aboutViewWithoutStyling
                }>
                <Text
                  style={
                    onClickToggle === 'feedback'
                      ? styles.textStyle
                      : styles.textStyleWithColor
                  }>
                  Feedback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setonClickToggle('portfolio')}
                style={
                  onClickToggle === 'portfolio'
                    ? styles.aboutViewStyling
                    : styles.aboutViewWithoutStyling
                }>
                <Text
                  style={
                    onClickToggle === 'portfolio'
                      ? styles.textStyle
                      : styles.textStyleWithColor
                  }>
                  Portfolio
                </Text>
              </TouchableOpacity>
            </View>

            {onClickToggle === 'about' ? (
              <View>
                <Text style={styles.aboutText}>About</Text>

                <Text style={styles.aboutMainText}>
                  Welcome to Joyful HVAC Services, your premier destination for
                  all your heating, ventilation, and air conditioning (HVAC)
                  needs. With 10 years of industry experience, we specialize in
                  delivering top-notch HVAC solutions to residential,
                  commercial, and industrial clients alike.
                </Text>
              </View>
            ) : null}
            {onClickToggle === 'service' ? (
              <View style={styles.margin}>
                <TouchableOpacity style={styles.serviceSectionTopView}>
                  <View style={styles.serviceSectionMiddleView}>
                    <Image
                      source={images.acServices}
                      style={styles.serviceSectionImg}
                    />
                  </View>
                  <Text style={styles.serviceSectionText}>AC Services</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceSectionTopView}>
                  <View style={styles.serviceSectionMiddleView}>
                    <Image
                      source={images.ventilationServices}
                      style={styles.serviceSectionImg}
                    />
                  </View>
                  <Text style={styles.serviceSectionText}>
                    Ventilation Services
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceSectionTopView}>
                  <View style={styles.serviceSectionMiddleView}>
                    <Image
                      source={images.heatingServices}
                      style={styles.serviceSectionImg}
                    />
                  </View>
                  <Text style={styles.serviceSectionText}>
                    Heating Services
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {onClickToggle === 'feedback' && (
              <View>
                <View style={[styles.flexRow, styles.feedbackMainView]}>
                  <Image
                    source={images.serverProfileImg}
                    style={styles.serverProfileImg}
                  />
                  <View style={styles.feedbackLeftView}>
                    <Text style={styles.feedbackSection}>James Andrew</Text>
                    <Text style={styles.feedbackSectionOne} numberOfLines={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text style={styles.ratedText}>Rated</Text>
                    <View style={[styles.flexRow, {alignItems: 'center'}]}>
                      <Image source={images.star} style={styles.starImg} />
                      <Text style={styles.ratingTextOne}>4.8 Ratings</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexRow, styles.feedbackMainView]}>
                  <Image
                    source={images.serverProfileImgOne}
                    style={styles.serverProfileImg}
                  />
                  <View style={styles.feedbackLeftView}>
                    <Text style={styles.feedbackSection}>Emily Smith</Text>
                    <Text style={styles.feedbackSectionOne} numberOfLines={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Text style={styles.ratedText}>Rated</Text>
                    <View style={[styles.flexRow, {alignItems: 'center'}]}>
                      <Image source={images.star} style={styles.starImg} />
                      <Text style={styles.ratingTextOne}>4.8 Ratings</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.feedbackBtn}
                  onPress={handleFeedback}>
                  <Text style={styles.feedbackText}>View All</Text>
                  <Image
                    source={images.arrowBlue}
                    style={styles.arrowBlueImg}
                  />
                </TouchableOpacity>
              </View>
            )}
            {onClickToggle === 'portfolio' && (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.portfolioMainView}>
                  {portfolio.map((item, index) => {
                    return (
                      <View style={styles.marginLeft} key={index}>
                        <TouchableOpacity>
                          <Image
                            source={item.images}
                            style={styles.portfolioserviceImg}
                          />
                        </TouchableOpacity>
                        <Text style={styles.portfolioText}>{item.name}</Text>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            )}
          </View>
          <View style={styles.bottomMainView}>
            <View
              style={[
                styles.flexRow,
                {marginBottom: sizes.screenHeight * 0.02},
              ]}>
              <Image source={images.serviceImg} style={styles.profileImg} />
              <View style={styles.btmTextView}>
                <Text style={styles.bottomTextHeading}>
                  Joyful HVAC Services
                </Text>
                <Text style={styles.bottomTextSubHeading}>
                  Service Provider
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={images.emailImg}
                  style={styles.btmViewImgStyling}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={images.phone} style={styles.btmViewImgStyling} />
              </TouchableOpacity>
            </View>
            <View style={styles.flexRow}>
              <View>
                <Text style={styles.ratingText}>Rate</Text>
                <Text style={styles.locationText2}>$20/Hour</Text>
              </View>
              <TouchableOpacity
                style={styles.sessionBtn}
                onPress={() => navigation.navigate('ScheduleSession')}>
                <Image source={images.recording} style={styles.sessionImg} />
                <Text style={styles.sessionText}>Schedule Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
