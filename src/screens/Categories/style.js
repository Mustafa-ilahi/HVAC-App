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

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.screenHeight * 0.02,
  },

  headerText: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '600',
  },

  headerImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
  },

  searchImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.03,
  },

  SearchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.lightBlue2,
    backgroundColor: colors.white,
  },

  filterImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    marginLeft: sizes.screenWidth * 0.03,
  },

  inputFieldView: {
    width: sizes.screenWidth * 0.65,
    marginLeft: sizes.screenWidth * 0.02,
    color: colors.black,
  },

  serviceImgStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.27,
    height: sizes.screenHeight * 0.13,
    marginRight: sizes.screenWidth * 0.02,
  },

  tagImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.015,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.55,
  },

  ratingImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.02,
  },

  textColor: {
    color: colors.lightBlue2,
    fontSize: fontSize.small,
    fontWeight: '500',
  },

  ratingSection: {
    color: colors.gray,
    fontSize: fontSize.small,
  },
  ratingSectionOne: {
    color: colors.lightBlue2,
    fontSize: fontSize.medium,
    fontWeight: '500',
  },

  middleHeading: {
    color: '#474747',
    marginBottom: sizes.screenHeight * 0.03,
  },

  middleHeadingOne: {
    color: '#474747',
    marginVertical: sizes.screenHeight * 0.01,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  topHeading: {
    color: colors.black,
    fontWeight: '600',
  },
  topHeadingOne: {
    color: colors.grayBorder,
    fontSize: fontSize.small,
  },

  serviceMainView: {
    flexDirection: 'row',
    padding: sizes.screenWidth * 0.02,
    backgroundColor: colors.white,
    borderRadius: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.015,
  },

  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.screenWidth * 0.05,
    marginBottom: sizes.screenHeight * 0.02,
  },

  servicesView: {
    width: sizes.screenWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.screenHeight * 0.04,
    borderRadius: sizes.screenWidth * 0.06,
    backgroundColor: colors.lightBlue2,
  },

  servicesViewWithStyle: {
    width: sizes.screenWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    height: sizes.screenHeight * 0.04,
  },

  color: {
    color: colors.white,
    fontWeight: '500',
  },

  colorBlack: {
    color: colors.black,
    fontWeight: '500',
  },

  tagPosition: {
    position: 'absolute',
    left: sizes.screenWidth * 0.51,
    top: 8,
  },

  startRating: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.02,
  },

  btmView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.01,
  },

  filterView: {
    position: 'absolute',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.1,
    backgroundColor: 'white',
    left: sizes.screenWidth * 0.8,
    top: sizes.screenHeight * 0.16,
  },

  dropDownMainView: {
    width: sizes.screenWidth * 0.37,
    height: sizes.screenHeight * 0.22,
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: sizes.screenHeight * 0.17,
    left: sizes.screenWidth * 0.58,
    borderRadius: sizes.screenWidth * 0.06,
    paddingTop: sizes.screenHeight * 0.01,
    shadowColor: 'black',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 10,
  },

  dropDownImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.05,
    height: sizes.screenWidth * 0.05,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.25,
    marginBottom: sizes.screenHeight * 0.015,
    marginLeft: sizes.screenHeight * 0.019,
  },

  dropDownColor: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.015,
  },
});
