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
  },

  middleMainView: {
    height: sizes.screenHeight * 0.77,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  middleViewImgStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.3,
    height: sizes.screenHeight * 0.09,
    marginBottom: sizes.screenHeight * 0.001,
  },

  bottomButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: sizes.screenHeight * 0.06,
  },

  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.34,
    height: sizes.screenHeight * 0.16,
  },

  containerViewAfterClick: {
    alignItems: 'center',
    borderWidth: 1,
    width: sizes.screenWidth * 0.34,
    height: sizes.screenHeight * 0.16,
    borderRadius: sizes.screenWidth * 0.03,
    borderColor: colors.lightBlue2,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  itemText: {
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.medium,
  },
  itemTextWithoutColor: {
    color: colors.gray,
    fontWeight: '600',
    fontSize: fontSize.medium,
  },
  itemText1: {
    color: colors.black,
    fontWeight: '600',
    fontSize: fontSize.medium,
    marginTop: sizes.screenHeight * 0.005,
  },
  itemTextWithoutColor: {
    color: colors.grey,
    fontWeight: '600',
    fontSize: fontSize.medium,
    marginTop: sizes.screenHeight * 0.005,
  },
});
