import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  flexRow: {
    flexDirection: 'row',
  },

  headerImgOne: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.033,
    height: sizes.screenHeight * 0.025,
  },
  headerImgTwo: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
  },

  headerMainView: {
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.01,
  },

  headerHeading: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
  },

  headerLocation: {
    color: colors.black,
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.01,
  },

  videoStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
  },
  videoSessionText: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.002,
  },
  videoSessionText1: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: fontSize.small,
  },

  videoMainView: {
    borderWidth: 1,
    width: sizes.screenWidth * 0.45,
    padding: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
  },

  topVideoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.04,
  },

  ratingImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.1,
  },
  ratingImgSty1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.14,
    alignSelf: 'center',
  },

  ratingView: {
    width: sizes.screenWidth * 0.88,
    height: sizes.screenHeight * 0.13,
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
  },

  graphView: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
    // marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.88,
    height: sizes.screenHeight * 0.16,
  },

  customerText: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  flexRow: {
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
    // marginTop: sizes.screenHeight * 0.01,
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

  marginBottom: {
    marginBottom: sizes.screenHeight * 0.09,
  },

  viewAllStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.21,
    justifyContent: 'space-between',
    borderRadius: sizes.screenWidth * 0.3,
    borderWidth: 1,
    paddingHorizontal: sizes.screenWidth * 0.032,
    height: sizes.screenHeight * 0.037,
    borderColor: colors.lightBlue2,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },

  viewText: {
    fontSize: fontSize.small,
    color: colors.lightBlue2,
  },

  arrowViewStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.025,
    height: sizes.screenHeight * 0.01,
  },
});
