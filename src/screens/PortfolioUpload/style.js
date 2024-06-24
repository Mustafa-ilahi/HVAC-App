import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.03,
  },

  TopHeading: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.h3,
  },
  TopPara: {
    color: colors.black,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.7,
  },
  TopPara1: {
    color: colors.black,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.88,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.01,
  },
  TopPara2: {
    color: colors.black,
    fontSize: fontSize.small,
    width: sizes.screenWidth * 0.88,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.lightBlue,
    height: sizes.screenHeight * 0.15,
    padding: sizes.screenHeight * 0.01,
    textAlignVertical: 'top',
  },

  providerImgSty: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.22,
    borderRadius: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.05,
    marginBottom: sizes.screenHeight * 0.01,
  },

  middleView: {
    alignSelf: 'center',
    // alignItems: 'center',
  },

  photoText: {
    color: colors.black,
    fontSize: fontSize.medium,
    alignSelf: 'center',
    // fontWeight: '500',
  },
  hourlyText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    // fontWeight: '500',
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

  bottomButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: sizes.screenHeight * 0.76,
  },
});
