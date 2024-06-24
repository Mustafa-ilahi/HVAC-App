import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingTop: sizes.screenHeight * 0.03,
  },

  padding: {
    paddingHorizontal: sizes.screenWidth * 0.04,
  },

  hori: {
    height: sizes.screenHeight * 0.001,
    width: sizes.screenWidth * 0.88,
    backgroundColor: colors.grayBorder,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.01,
  },

  imgStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.3,
    marginTop: sizes.screenHeight * 0.045,
  },
  imgStyle1: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    borderRadius: sizes.screenWidth * 0.3,
    marginTop: sizes.screenHeight * 0.08,
  },

  flexRow: {
    flexDirection: 'row',
  },
  inputTextField: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.85,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    maxHeight: sizes.screenHeight * 0.1,
  },

  chatText: {
    color: colors.black,
    padding: sizes.screenWidth * 0.025,
    paddingLeft: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    borderTopLeftRadius: sizes.screenWidth * 0.05,
    borderTopRightRadius: sizes.screenWidth * 0.05,
    borderBottomRightRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.7,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 30,
  },

  chatText1: {
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    padding: sizes.screenWidth * 0.025,
    paddingLeft: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    borderTopRightRadius: sizes.screenWidth * 0.05,
    borderBottomRightRadius: sizes.screenWidth * 0.05,
    borderBottomLeftRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 30,
  },

  chatText2: {
    color: colors.black,
    width: sizes.screenWidth * 0.7,
    padding: sizes.screenWidth * 0.025,
    paddingLeft: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    borderTopRightRadius: sizes.screenWidth * 0.05,
    borderTopLeftRadius: sizes.screenWidth * 0.05,
    borderBottomLeftRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.chatBlue,
    alignSelf: 'flex-end',
    marginTop: sizes.screenHeight * 0.01,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 30,
  },

  chatText4: {
    color: colors.black,
    padding: sizes.screenWidth * 0.025,
    // paddingLeft: sizes.screenWidth * 0.03,
    marginLeft: sizes.screenHeight * 0.01,
    marginBottom: sizes.screenHeight * 0.01,
    borderTopLeftRadius: sizes.screenWidth * 0.05,
    borderTopRightRadius: sizes.screenWidth * 0.05,
    borderBottomRightRadius: sizes.screenWidth * 0.05,
    backgroundColor: colors.white,
    width: sizes.screenWidth * 0.7,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
    elevation: 30,
    marginTop: sizes.screenHeight * 0.012,
  },

  imagePicker: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.04,
  },

  textField: {
    backgroundColor: colors.white,
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.04,
    width: sizes.screenWidth * 0.7,
  },

  marginBottom: {
    marginBottom: sizes.screenHeight * 0.08,
  },
});
