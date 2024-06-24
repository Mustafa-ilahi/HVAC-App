import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.03,
  },

  flexRow: {
    flexDirection: 'row',
  },

  feedbackMainView: {
    padding: sizes.screenWidth * 0.02,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.03,
  },

  serverProfileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
  },

  feedbackLeftView: {
    marginLeft: sizes.screenWidth * 0.02,
  },

  feedbackSection: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },

  ratedText: {
    color: colors.gray,
  },

  ratingTextOne: {
    color: colors.lightBlue2,
    fontSize: fontSize.smallM,
    fontWeight: '600',
  },

  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.65,
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.015,
  },

  timeDuration: {
    // borderWidth:1,
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    justifyContent: 'center',
    backgroundColor: colors.lightBlue2,
  },

  textColor: {
    color: colors.white,
    fontSize: fontSize.small,
  },

  hori: {
    height: sizes.screenHeight * 0.001,
    width: sizes.screenWidth * 0.88,
    backgroundColor: colors.grayBorder,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.03,
  },

  rowHeadings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.02,
    alignItems: 'center',
  },
  rowHeadings1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.02,
    alignItems: 'center',
  },

  sessionText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.large,
  },
  sessionText1: {
    color: colors.black,
    fontSize: fontSize.large,
  },
  sessionText2: {
    color: colors.black,
    fontSize: fontSize.smallM,
    marginBottom: sizes.screenHeight * 0.02,
  },
  sessionText3: {
    color: colors.black,
    fontSize: fontSize.medium,
    marginBottom: sizes.screenHeight * 0.02,
    fontWeight: '500',
  },

  bottomButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.05,
  },
});
