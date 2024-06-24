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

  phoneImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.15,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.08,
    // backgroundColor:'red'
  },

  heading: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  para: {
    color: colors.black,
    textAlign: 'center',
    marginTop: sizes.screenHeight * 0.02,
  },

  starImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.35,
    height: sizes.screenHeight * 0.03,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.02,
    // backgroundColor:'red'
  },

  textField: {
    backgroundColor: 'white',
    height: sizes.screenHeight * 0.2,
    borderRadius: sizes.screenWidth * 0.04,
    paddingHorizontal: sizes.screenWidth * 0.03,
  },

  textInput: {
    height: sizes.screenHeight * 0.2,
    textAlignVertical: 'top',
    color: colors.black,
  },

  bottomBtn: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: sizes.screenWidth * 0.09,
  },
});
