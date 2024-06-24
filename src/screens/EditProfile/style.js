import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.02,
  },

  header: {
    fontSize: fontSize.h4,
    fontWeight: '500',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.02,
  },

  profileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.3,
    height: sizes.screenWidth * 0.3,
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.3,
  },

  profileImg1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.08,
    height: sizes.screenHeight * 0.04,
  },

  profileImgView: {
    position: 'absolute',
    left: sizes.screenWidth * 0.5,
    top: sizes.screenHeight * 0.145,
  },

  profileEditSymbols: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.02,
  },

  profileMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    padding: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.04,
  },

  profileMainView1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center',
    padding: sizes.screenWidth * 0.03,
    borderColor: colors.grayBorder,
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: colors.white,
    marginTop: sizes.screenHeight * 0.02,
  },

  profileEditText: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.01,
    // backgroundColor: 'red',
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.06,
    fontSize: fontSize.smallM,
  },

  bottomButton: {
    alignSelf: 'center',
    width: sizes.screenWidth * 0.77,
    height: sizes.screenHeight * 0.06,
    marginTop: sizes.screenHeight * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    backgroundColor: colors.lightBlue2,
  },

  bottomButtonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.smallM,
  },
});
