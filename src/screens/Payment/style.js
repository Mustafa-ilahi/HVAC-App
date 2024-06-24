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

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.07,
  },

  buttonFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    width: sizes.screenWidth * 0.35,
    height: sizes.screenHeight * 0.05,
    justifyContent: 'space-evenly',
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.lightBlue2,
  },

  moneyImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
  },

  cardText: {
    color: colors.white,
  },

  topViewText: {
    color: colors.gray,
    fontWeight: '500',
    marginBottom: sizes.screenHeight * 0.005,
  },

  topViewText1: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.sma,
  },

  imgStyling: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.01,
    marginRight: sizes.screenWidth * 0.02,
  },
  imgStyling1: {
    transform: [{rotate: '180deg'}],
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.02,
  },

  masterCardInputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: sizes.screenWidth * 0.01,
    borderRadius: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.03,
    borderColor: colors.blueHVACGray,
    marginBottom: sizes.screenHeight * 0.03,
    height: sizes.screenHeight * 0.06,
  },

  textInput: {
    width: sizes.screenWidth * 0.75,
    color: colors.black,
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottmButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.05,
  },
});
