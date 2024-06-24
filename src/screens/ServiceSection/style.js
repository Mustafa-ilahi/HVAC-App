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
    // backgroundColor:'red'
  },

  searchImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.03,
    // marginLeft:sizes.screenWidth * 0.02
    // backgroundColor:'red'
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
    // backgroundColor:'red'
  },

  tagImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.015,
    marginLeft: sizes.screenWidth * 0.17,
    // backgroundColor:'red'
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding:sizes.screenHeight * 0.01
  },

  ratingImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.02,
    // backgroundColor:'red'
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

  middleHeading: {
    color: '#474747',
    marginBottom: sizes.screenHeight * 0.03,
  },

  topHeading: {
    color: colors.black,
    fontWeight: '600',
  },

  serviceMainView: {
    flexDirection: 'row',
    padding:sizes.screenWidth * 0.02,
    backgroundColor:colors.white,
    borderRadius:sizes.screenWidth * 0.03,
    marginBottom:sizes.screenHeight * 0.015
},
});
