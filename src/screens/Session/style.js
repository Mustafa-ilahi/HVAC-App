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
    fontSize: fontSize.h5,
    fontWeight: '600',
  },

  headerImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    // backgroundColor:'red'
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.01,
  },

  textHeading: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
    marginTop: sizes.screenHeight * 0.007,
  },

  textHeadingWithoutColor: {
    color: colors.gray,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  blueLine: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.2,
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.002,
  },

  blueLine1: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.22,
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.002,
  },

  blueLine2: {
    height: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.201,
    backgroundColor: colors.lightBlue2,
    borderRadius: sizes.screenWidth * 0.02,
    marginTop: sizes.screenHeight * 0.002,
  },

  completedTopView: {
    height: sizes.screenHeight * 0.13,
    width: sizes.screenWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
  },
  completedTopView1: {
    height: sizes.screenHeight * 0.15,
    width: sizes.screenWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
  },

  upcomingMainView: {
    height: sizes.screenHeight * 0.12,
    width: sizes.screenWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    flexDirection: 'row',
  },
  completedMainView: {
    flexDirection: 'row',
    // backgroundColor:'red',
    height: sizes.screenHeight * 0.09,
  },

  electricianImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.1,
    margin: 10,
    // backgroundColor:'red'
  },
  electricianImg1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.07,
    margin: 10,
    // backgroundColor:'red'
  },

  upcomingText: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.smallM,
    marginTop: sizes.screenHeight * 0.015,
    marginBottom: sizes.screenHeight * 0.005,
  },
  upcomingText1: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: fontSize.small,
    marginBottom: sizes.screenHeight * 0.01,
  },
  cancelledText1: {
    color: colors.gray,
    fontWeight: '500',
    fontSize: fontSize.smallM,
    marginBottom: sizes.screenHeight * 0.01,
  },
  upcomingText2: {
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: fontSize.smallM,
  },
  upcomingText3: {
    color: colors.lightBlue2,
    fontWeight: '500',
    fontSize: fontSize.small,
  },

  upcomingBtn: {
    backgroundColor: colors.blueHVAC1,
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    position: 'absolute',
    right: 15,
    top: 10,
  },
  upcomingBtn1: {
    backgroundColor: colors.white,
    height: sizes.screenHeight * 0.04,
    width: sizes.screenWidth * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    position: 'absolute',
    right: 15,
    top: 10,
    borderWidth: 1,
    borderColor: colors.lightBlue2,
  },

  btnText: {
    color: colors.lightBlue2,
    fontWeight: '600',
    fontSize: fontSize.small,
  },

  sessionText: {
    color: colors.black,
    fontSize: fontSize.small,
    position: 'absolute',
    top: sizes.screenHeight * 0.018,
    left: sizes.screenWidth * 0.6,
  },
  cancelledText: {
    color: colors.red,
    fontSize: fontSize.smallM,
    position: 'absolute',
    top: sizes.screenHeight * 0.007,
    left: sizes.screenWidth * 0.72,
  },

  hori: {
    width: sizes.screenWidth * 0.85,
    height: sizes.screenHeight * 0.001,
    backgroundColor: colors.grayBorder,
    // bottom:sizes.screenHeight * 0.04,
    alignSelf: 'center',
  },

  bottom: {
    // position:'absolute',
    // top:sizes.screenHeight * 0.13,
    // alignSelf:'center',
  },

  arrowImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.02,
    // backgroundColor:'red'
  },

  viewText: {
    color: colors.lightBlue2,
    fontSize: fontSize.smallM,
  },

  reviewBtn: {
    // borderWidth:1,
    alignSelf: 'center',
    backgroundColor: colors.blueHVAC1,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.3,
  },
  reviewBtn1: {
    // borderWidth:1,
    alignSelf: 'center',
    backgroundColor: colors.btnColor,
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.3,
  },

  reviewBtnText1: {
    color: colors.white,
    fontWeight: '600',
  },

  reviewBtnText: {
    color: colors.lightBlue2,
    fontWeight: '600',
  },

  btmBtnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth,
    paddingHorizontal: sizes.screenWidth * 0.07,
  },

  cancelledTopView: {
    height: sizes.screenHeight * 0.09,
    width: sizes.screenWidth * 0.9,
    backgroundColor: 'white',
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
  },
});
