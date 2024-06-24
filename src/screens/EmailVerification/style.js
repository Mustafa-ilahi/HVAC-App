import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },
  mainContentView: {
    marginLeft: sizes.screenWidth * 0.06,
    marginTop: sizes.screenHeight * 0.09,
  },

  headingText: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },

  headingPara: {
    width: sizes.screenWidth * 0.65,
    color: '#8A8A8A',
    marginTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.smallM,
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

  textInputMainView: {
    alignSelf: 'center',
    marginTop: sizes.screenWidth * 0.3,
  },

  bottomBtn: {
    alignSelf: 'center',
    marginTop: sizes.screenWidth * 0.6,
  },
});
