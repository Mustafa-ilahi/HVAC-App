import {StyleProp, StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  bgImg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  logoStyling: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    marginTop: sizes.screenHeight * 0.13,
  },

  mainView: {
    alignItems: 'center',
    // backgroundColor: 'red',
    height: sizes.screenHeight * 0.7,
    justifyContent: 'space-evenly',
    marginTop: sizes.screenHeight * 0.15,
    // flex: 1,
  },

  landingPgImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.87,
    height: sizes.screenHeight * 0.29,
    marginTop: sizes.screenHeight * 0.07,
  },

  headingStyling: {
    fontSize: fontSize.h4,
    fontWeight: '600',
    color: colors.blueBlack,
    width: sizes.screenWidth * 0.5,
  },

  paraStyling: {
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.82,
    color: colors.black,
    marginTop: sizes.screenWidth * 0.01,
  },

  margin: {
    marginLeft: sizes.screenWidth * 0.07,
    marginTop: sizes.screenWidth * 0.19,
  },

  btnText: {
    color: colors.lightBlue2,
    fontSize: fontSize.medium,
    textAlign: 'center',
    fontWeight: '500',
  },

  btnView: {
    alignSelf: 'center',
    borderWidth: 1.2,
    borderColor: colors.lightBlue2,
    width: sizes.screenWidth * 0.78,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.1,
    marginTop: sizes.screenHeight * 0.1,
  },
});
