import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingTop: sizes.screenHeight * 0.02,
  },

  viewPadding: {
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginBottom: sizes.screenHeight * 0.02,
  },

  imgSlider: {
    marginTop: sizes.screenHeight * 0.02,
  },

  locationImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.02,
    marginTop: sizes.screenHeight * 0.002,
  },

  flexRow: {
    flexDirection: 'row',
  },

  topHeading: {
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.large,
  },

  locationText: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.7,
  },

  locationText2: {
    color: colors.black,
    width: sizes.screenWidth * 0.42,
    fontSize: fontSize.medium,
    fontWeight: '600',
  },

  rating: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.02,
  },

  ratingText: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.01,
  },

  horizontalLine: {
    height: sizes.screenHeight * 0.001,
    width: sizes.screenWidth * 0.9,
    backgroundColor: '#D1D1D1',
    marginVertical: sizes.screenHeight * 0.02,
  },

  textStyle: {
    color: colors.white,
    fontSize: fontSize.medium,
  },

  textStyleWithColor: {
    color: '#797979',
    fontSize: fontSize.medium,
  },

  flexRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  aboutViewStyling: {
    width: sizes.screenWidth * 0.23,
    height: sizes.screenHeight * 0.044,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.1,
    backgroundColor: colors.lightBlue2,
  },
  aboutViewWithoutStyling: {
    width: sizes.screenWidth * 0.23,
    height: sizes.screenHeight * 0.044,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.1,
  },

  aboutText: {
    color: colors.textGrey,
    marginTop: sizes.screenHeight * 0.02,
  },

  aboutMainText: {
    color: colors.black,
    fontSize: fontSize.smallM,
  },

  profileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: 'red',
  },

  bottomTextHeading: {
    color: colors.black,
    fontSize: fontSize.smallM,
  },
  bottomTextSubHeading: {
    color: colors.black,
    fontSize: fontSize.small,
  },

  btmViewImgStyling: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.045,
  },

  sessionBtn: {
    flexDirection: 'row',
    width: sizes.screenWidth * 0.5,
    padding: sizes.screenWidth * 0.035,
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 0.3,
    justifyContent: 'space-evenly',
  },

  btmTextView: {
    justifyContent: 'center',
    marginLeft: sizes.screenHeight * 0.01,
    marginRight: sizes.screenWidth * 0.26,
  },

  bottomMainView: {
    backgroundColor: colors.blueHVAC2,
    height: sizes.screenHeight * 0.17,
    width: sizes.screenWidth,
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.02,
    borderTopLeftRadius: sizes.screenWidth * 0.03,
    borderTopRightRadius: sizes.screenWidth * 0.03,
    alignSelf: 'center',
  },

  sessionText: {
    color: colors.white,
    fontWeight: '600',
  },

  sessionImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.025,
  },

  paddingLeft: {
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  serviceSectionImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.04,
  },

  serviceSectionMiddleView: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.072,
    backgroundColor: colors.blueHVAC1,
    borderRadius: sizes.screenWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  serviceSectionTopView: {
    width: sizes.screenWidth * 0.24,
    height: sizes.screenHeight * 0.16,
    backgroundColor: colors.blueHVAC,
    borderRadius: sizes.screenWidth * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: sizes.screenWidth * 0.03,
  },

  serviceSectionText: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.005,
    textAlign: 'center',
  },

  margin: {
    marginVertical: sizes.screenWidth * 0.04,
    alignSelf: 'center',
    flexDirection: 'row',
  },

  serverProfileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
  },

  feedbackSection: {
    color: colors.black,
    fontWeight: '600',
    marginBottom: sizes.screenHeight * 0.01,
  },
  feedbackSectionOne: {
    color: colors.black,
    width: sizes.screenWidth * 0.73,
  },

  starImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.02,
  },

  ratingTextOne: {
    color: colors.black,
    fontSize: fontSize.smallM,
    marginLeft: sizes.screenWidth * 0.02,
  },

  ratedText: {
    color: colors.gray,
    marginTop: sizes.screenHeight * 0.01,
  },

  feedbackLeftView: {
    marginLeft: sizes.screenWidth * 0.02,
  },

  feedbackMainView: {
    padding: sizes.screenWidth * 0.02,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
  },

  arrowBlueImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.015,
  },

  feedbackText: {
    color: colors.lightBlue2,
  },

  feedbackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    borderWidth: 1,
    alignSelf: 'flex-end',
    width: sizes.screenWidth * 0.25,
    height: sizes.screenHeight * 0.04,
    justifyContent: 'center',
    borderColor: colors.lightBlue2,
    marginTop: sizes.screenHeight * 0.02,
  },

  portfolioserviceImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.29,
    height: sizes.screenHeight * 0.18,
  },

  portfolioText: {
    color: colors.black,
  },

  portfolioMainView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.02,
  },

  marginLeft: {
    marginLeft: sizes.screenWidth * 0.02,
  },
});
