import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  mainContainer: {
    alignItems: 'center',
  },

  TopHeading: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.25,
  },

  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.8,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: sizes.screenWidth * 0.3,
    paddingHorizontal: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.025,
    height: sizes.screenHeight * 0.065,
  },

  userImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.022,
    marginRight: sizes.screenWidth * 0.01,
  },

  textInputStyle: {
    color: colors.black,
    width: sizes.screenWidth * 0.6,
  },

  forgotPassText: {
    marginLeft: sizes.screenWidth * 0.5,
    marginTop: sizes.screenWidth * 0.014,
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.smallM,
  },

  btnView: {
    marginTop: sizes.screenHeight * 0.22,
  },

  btmButtonText: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.02,
  },

  signInText: {
    color: colors.black,
    fontWeight: '600',
  },

  bottomText: {
    color: colors.lightGrey,
  },
});
