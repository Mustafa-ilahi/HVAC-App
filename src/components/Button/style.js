import {StyleProp, StyleSheet} from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  buttonView: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.lightBlue2,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
    flexDirection:'row',
    alignItems:'center',
  },

  buttonViewDisabled: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.3,
  },

  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  buttonTextDisabled: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize.medium,
    fontWeight:'500'
  },

  arrowImg:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.05,
    height:sizes.screenHeight * 0.02,
    marginLeft:sizes.screenWidth * 0.03,
    // backgroundColor:'red'
  },
});
