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
    // alignItems:'center'
  },

  headingText: {
    color: colors.black,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },

  headingPara: {
    width: sizes.screenWidth * 0.81,
    color: '#8A8A8A',
    marginTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.smallM,
  },

  codeFieldRoot: {
    marginTop: sizes.screenHeight * 0.13,
    // backgroundColor:'red',
    width:sizes.screenWidth * 0.68,
    marginLeft:sizes.screenWidth * 0.07
    // alignSelf:'center'
    // paddingHorizontal: sizes.screenWidth * 0.12,
  },

  cell: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.07,
    lineHeight: sizes.screenHeight * 0.065,
    fontSize: fontSize.h5,
    fontWeight: '500',
    borderColor: colors.black,
    borderWidth: 1,
    textAlign: 'center',
    color: colors.black,
    borderRadius: sizes.screenWidth * 0.04,
    backgroundColor: colors.white,
  },

  focusCell: {
    borderWidth: 1,
    borderColor: colors.black,
  },

  btmButtonText: {
    flexDirection: 'row',
    marginTop: sizes.screenHeight * 0.02,
    marginLeft:sizes.screenWidth * 0.16
  },

  signInText: {
    color: colors.lightBlue2,
    fontWeight: '600',
  },

  bottomText: {
    color: colors.lightGrey,
  },

  bottmBtn:{
    marginTop:sizes.screenHeight * 0.29,
    // alignSelf:'center'
    marginLeft:sizes.screenWidth * 0.04
  },
});
