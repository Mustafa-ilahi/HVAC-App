import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  imageSlider: {
    height: sizes.screenHeight * 0.45,
    width: sizes.screenWidth,
    alignSelf:'center'
  },
  sliderImg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.45,
    resizeMode:'contain',
    // backgroundColor:'red'
  },
  bulletContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:30
  },
  bullet: {
    width: sizes.screenWidth * 0.026,
    height: sizes.screenWidth * 0.026,
    borderRadius: sizes.screenWidth * 0.02,
    marginHorizontal: sizes.screenWidth * 0.015,
    backgroundColor: colors.white,
  },
  bulletActive: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.015,
    borderRadius: sizes.screenWidth * 0.02,
    marginHorizontal: sizes.screenWidth * 0.015,
    backgroundColor: colors.white,
  },
  bulletActiveContainer: {
    width: sizes.screenWidth * 0.08,
    height: sizes.screenWidth * 0.02,
    borderRadius: sizes.screenWidth * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
});
