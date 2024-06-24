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

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  headerText: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
  },

  headerImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    // backgroundColor:'red'
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

  nameView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.04,
  },

  textView: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },
  textView1: {
    color: colors.gray,
    fontSize: fontSize.large,
    marginBottom: sizes.screenHeight * 0.01,
  },
  textView2: {
    borderColor: colors.lightBlue2,
    borderWidth: 1,
    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.046,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.4,
  },
  textView3: {
    color: colors.lightBlue2,
  },

  middleMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.025,
    marginBottom: sizes.screenHeight * 0.03,
  },

  imageStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.07,
    height: sizes.screenHeight * 0.035,
  },

  imageStyle1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.02,
    transform: [{rotate: '180deg'}],
  },

  middleViewText: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500',
  },
  middleViewText1: {
    color: colors.gray,
    fontSize: fontSize.small,
  },

  middleTextView: {
    marginLeft: sizes.screenWidth * 0.03,
    width: sizes.screenWidth * 0.7,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: sizes.screenWidth * 0.84,
    height: sizes.screenHeight * 0.06,
    paddingHorizontal: sizes.screenWidth * 0.04,
    alignSelf: 'center',
    borderRadius: sizes.screenHeight * 0.015,
    borderColor: colors.lightBlue2,
    marginTop: sizes.screenHeight * 0.02,
  },

  signOutText: {
    color: colors.lightBlue2,
    fontSize: fontSize.medium,
    fontWeight: '600',
    width: sizes.screenWidth * 0.68,
  },
});
