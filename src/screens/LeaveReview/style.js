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
  reviewText: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.05,
  },
  reviewText1: {
    color: colors.gray,
    fontSize: fontSize.large,
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenHeight * 0.01,
  },

  reviewText2: {
    color: colors.black,
    marginTop: sizes.screenHeight * 0.06,
  },

  star: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
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
