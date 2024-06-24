import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  mainView: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop:sizes.screenHeight * 0.03
  },

  imgStyle: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.2,
    marginRight:sizes.screenWidth * 0.01
  },

  videoCaptionOne: {
    fontSize: fontSize.smallM,
    width: sizes.screenWidth * 0.4,
    color: colors.white,
  },

  videoCapView: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  topHeading:{
    color:colors.black,
    fontSize:fontSize.large,
    fontWeight:'500',
    marginBottom:sizes.screenHeight * 0.01,
    marginTop:sizes.screenHeight * 0.03
  },

  videoTopView: {
    height: sizes.screenHeight * 0.2,
  },

  scrollViewStyle: {
    height: sizes.screenHeight * 2,
  },

  imagesThreeStyle:{
    resizeMode:'contain',
    width: sizes.screenWidth * 0.42,
    height: sizes.screenHeight * 0.12,
    // backgroundColor:'red'
  },
  playBtnStyle:{
    resizeMode:'contain',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.06,
    // backgroundColor:'red'
  },

  playBtnView:{
    position:'absolute',
    left:sizes.screenWidth * 0.16,
    top:sizes.screenWidth * 0.05,
  },

  popularVideos:{
    flexDirection:'row',
    marginBottom:sizes.screenHeight * 0.01
  },

  videoTextOne:{
    color:'#8F8F8F',
    fontSize:fontSize.medium
  },

  videoTextTwo:{
    color:colors.black,
    fontSize:fontSize.medium,
    width:sizes.screenWidth * 0.5,
    marginVertical:sizes.screenHeight * 0.01
  },

  videoTextThree:{
    color:'#8F8F8F',
    fontSize:fontSize.small,
  },
});
