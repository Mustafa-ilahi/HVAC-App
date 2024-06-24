import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  padding: {
    padding: sizes.screenWidth * 0.07,
    marginTop: sizes.screenHeight * 0.06,
  },

  headingStyle: {
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '600',
  },

  headingTextStyle: {
    color: '#8A8A8A',
    marginTop: sizes.screenHeight * 0.005,
  },

  imgStyle: {
    // resizeMode: 'contain',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.21,
    borderRadius: sizes.screenWidth * 0.04,
    marginTop: sizes.screenHeight * 0.06,
    marginBottom: sizes.screenHeight * 0.02,
    // backgroundColor:'red',
  },

  clickPhotoMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.04,
    borderColor: colors.grid,
    marginTop: sizes.screenHeight * 0.02,
  },

  cameraImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    marginRight: sizes.screenWidth * 0.02,
    // backgroundColor:'red'
  },

  btmButton: {
    // alignSelf:'center',
    marginTop: sizes.screenHeight * 0.06,
    marginLeft: sizes.screenWidth * 0.12,
  },

  colorText: {
    color: colors.gray,
  },
});
