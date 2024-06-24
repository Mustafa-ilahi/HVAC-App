import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {isNestedFrozen} from '@reduxjs/toolkit/dist/serializableStateInvariantMiddleware';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop: sizes.screenHeight * 0.03,
  },

  flexRow: {
    flexDirection: 'row',
  },

  serverProfileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
  },

  feedbackSection: {
    color: colors.black,
    fontWeight: '600',
    // marginTop: sizes.screenHeight * 0.01,
  },
  feedbackSectionOne: {
    color: colors.black,
    width: sizes.screenWidth * 0.73,
  },

  starImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.02,
  },

  ratingTextOne: {
    color: colors.black,
    fontSize: fontSize.smallM,
    marginLeft: sizes.screenWidth * 0.02,
  },

  ratedText: {
    color: colors.gray,
    marginTop: sizes.screenHeight * 0.01,
  },

  feedbackLeftView: {
    marginLeft: sizes.screenWidth * 0.02,
  },

  feedbackMainView: {
    padding: sizes.screenWidth * 0.02,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
  },

  arrowBlueImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.015,
  },

  marginBottom: {
    marginBottom: sizes.screenHeight * 0.06,
  },
  commitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.3,
    marginTop: sizes.screenHeight * 0.01,
    height: sizes.screenHeight * 0.05,
    borderColor: colors.disabledBg,
  },

  arrowImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenWidth * 0.04,
  },

  inputField: {
    color: colors.black,
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.75,
  },
});
