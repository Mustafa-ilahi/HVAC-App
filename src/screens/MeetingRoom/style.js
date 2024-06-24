import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../services';

export const styles = StyleSheet.create({
  meetingImg: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
  },

  phoneImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.1,
  },

  phoneView: {
    backgroundColor: '#FC4040',
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.1,
    borderRadius: sizes.screenWidth * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 48,
  },
});
