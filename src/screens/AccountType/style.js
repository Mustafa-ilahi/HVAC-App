import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
  },

  secondMainView: {
    alignItems: 'center'
},

  headingStyle: {
    fontSize: fontSize.h4,
    fontWeight: '500',
    color: colors.black,
    width: sizes.screenWidth * 0.83,
    marginTop: sizes.screenHeight * 0.12,
    marginBottom: sizes.screenHeight * 0.07,
  },

  btnView: {
    flexDirection: 'row',
    borderWidth: 1,
    width: sizes.screenWidth * 0.87,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.05,
    borderColor: '#F4F4F4',
    marginTop: sizes.screenHeight * 0.02,
  },

  btnViewAfterClick: {
    flexDirection: 'row',
    borderWidth: 1,
    width: sizes.screenWidth * 0.87,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.05,
    borderColor: colors.lightBlue2,
    marginTop: sizes.screenHeight * 0.02,
  },

  userImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.1,
    // backgroundColor:'red'
  },

  textContainer: {
    alignSelf: 'center',
    marginLeft: sizes.screenWidth * 0.02,
  },

  serviceHeading: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '500',
  },

  servicePara: {
    color: colors.lightred,
    fontSize: fontSize.small,
  },

  buttonView: {
    marginTop: sizes.screenHeight * 0.2,
  },
});
