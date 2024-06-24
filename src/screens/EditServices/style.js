import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  topHeading: {
    color: colors.black,
    fontSize: fontSize.h4,
    marginTop: sizes.screenHeight * 0.04,
    fontWeight: '500',
  },

  ventImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenWidth * 0.06,
    // backgroundColor: 'red',
  },

  ventImgVent: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.04,
    // backgroundColor: 'red',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    padding: sizes.screenWidth * 0.035,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.grayBorder,
    marginTop: sizes.screenHeight * 0.02,
  },

  flexRowMain: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    padding: sizes.screenWidth * 0.035,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.lightBlue2,
    marginTop: sizes.screenHeight * 0.02,
  },

  ventText: {
    color: colors.black,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.7,
    marginLeft: sizes.screenWidth * 0.02,
  },

  flexPort: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: sizes.screenHeight * 0.2,
  },

  portfolioImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.35,
    height: sizes.screenWidth * 0.4,
    marginRight: sizes.screenWidth * 0.01,
  },

  hourlyText: {
    color: colors.gray,
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.007,
  },

  rateView: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.88,
    flexDirection: 'row',
    borderColor: colors.grayBorder,
    borderRadius: sizes.screenWidth * 0.02,
  },

  rateViewColor: {
    color: colors.lightBlue2,
    fontSize: fontSize.medium,
    fontWeight: '700',
    marginLeft: 35,
  },

  rateViewInputField: {
    color: colors.black,
    width: sizes.screenWidth * 0.18,
    fontSize: fontSize.medium,
    height: sizes.screenHeight * 0.053,
    // backgroundColor: 'red',
  },

  TopPara1: {
    color: colors.gray,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.88,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  TopPara2: {
    color: colors.black,
    fontSize: fontSize.small,
    width: sizes.screenWidth * 0.88,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.lightBlue,
    height: sizes.screenHeight * 0.15,
    padding: sizes.screenHeight * 0.01,
    textAlignVertical: 'top',
  },

  bottomBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.04,
  },
});
