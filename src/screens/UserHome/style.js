import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
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

  topHeading: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.02,
  },

  imgOne: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.53,
    height: sizes.screenHeight * 0.41,
  },
  imgTwo: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.2,
  },

  arrowStyling: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.025,
  },
  arrowStylingTwo: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.025,
  },

  imgView: {
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 1,
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgViewTwo: {
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 1,
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  serviceBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: sizes.screenWidth * 0.1,
    width: sizes.screenWidth * 0.35,
    borderWidth: 1,
    alignItems: 'center',
    padding: sizes.screenWidth * 0.016,
    marginTop: sizes.screenHeight * 0.005,
    borderColor: colors.white,
  },
  serviceBtnTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: sizes.screenWidth * 0.05,
    borderWidth: 1,
    alignItems: 'center',
    width: sizes.screenWidth * 0.27,
    padding: sizes.screenWidth * 0.016,
    marginTop: sizes.screenHeight * 0.005,
    borderColor: colors.white,
  },

  serviceHeadingStyle: {
    color: colors.white,
    fontSize: fontSize.large,
  },
  serviceHeadingStyleTwo: {
    color: colors.white,
    fontSize: fontSize.medium,
  },

  serviceBtnText: {
    color: colors.white,
  },

  serviceBtnTextTwo: {
    color: colors.white,
    fontSize: fontSize.small,
  },

  serviceTextMainView: {
    position: 'absolute',
    bottom: 10,
    left: 7,
  },

  serviceTextMainViewTwo: {
    position: 'absolute',
    bottom: 7,
    left: 10,
  },

  arrowViewStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.025,
    height: sizes.screenHeight * 0.01,
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
  },

  viewText: {
    fontSize: fontSize.small,
    color: colors.lightBlue2,
  },

  videoView: {
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.large,
  },

  videoHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },

  videoImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.55,
    height: sizes.screenHeight * 0.23,
  },

  playBtnImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.1,
  },

  playBtnView: {
    position: 'absolute',
    top: sizes.screenHeight * 0.05,
    left: sizes.screenWidth * 0.185,
  },

  videoMainView: {
    backgroundColor: 'white',
    width: sizes.screenWidth * 0.55,
    height: sizes.screenWidth * 0.6,
    borderRadius: sizes.screenWidth * 0.04,
    marginRight: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.01,
  },

  imgHeartView: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.035,
    height: sizes.screenHeight * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
  },
  imgHeartViewOne: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.035,
    height: sizes.screenHeight * 0.02,
  },

  ratingText: {
    color: colors.black,
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.01,
    marginRight: sizes.screenWidth * 0.03,
  },

  videoTitle: {
    color: colors.black,
    marginBottom: sizes.screenHeight * 0.005,
    marginLeft: sizes.screenWidth * 0.04,
    marginTop: sizes.screenWidth * 0.02,
  },
});
