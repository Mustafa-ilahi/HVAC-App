import { StyleSheet } from 'react-native';
import { colors, fontSize, sizes } from '../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.screenWidth * 0.04,
  },
  flexRow: {
    flexDirection: 'row',
  },

  headerMainView: {
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.03,
    paddingBottom: sizes.screenHeight * 0.01
  },
  headerHeading: {
    color: colors.black,
    fontSize: fontSize.extraLarge,
  },
  headerImgOne: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.033,
    height: sizes.screenHeight * 0.025,
  },
  headerLocation: {
    color: colors.black,
    fontSize: fontSize.small,
    marginLeft: sizes.screenWidth * 0.01,
  },
  headerImgTwo: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
  },
  portfolioImg: {
    width: sizes.screenWidth * 0.34,
    height: sizes.screenHeight * 0.2,
    resizeMode: 'contain',
  },
  portfolioImg2: {
    width: sizes.screenWidth * 0.34,
    height: sizes.screenHeight * 0.2,
    resizeMode: 'contain',
    marginLeft: sizes.screenWidth * 0.01
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.05
  },
  portfolioText: {
    textAlign: 'center',
    fontSize: fontSize.small,
    fontWeight: '500',
    color: colors.black,
    marginTop: sizes.screenHeight * 0.005
  },
  addPortfolioBtn: {
    borderColor: colors.lightBlue2,
    borderWidth: 1,
    borderRadius: sizes.screenWidth * 0.04,
    paddingVertical: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.8,
    alignSelf: 'center'
  },
  addPortfolioText: {
    color: colors.lightBlue2,
    textAlign: 'center'
  },
  requestContainer: {
    width: sizes.screenWidth * 0.92,
    alignSelf: 'center',
    borderColor: colors.disabledBg3,
    borderWidth: 1,
    marginTop: sizes.screenHeight * 0.01,
    padding: sizes.screenWidth * 0.03,
    borderRadius: sizes.screenWidth * 0.015
  },
  requestProfile: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenWidth * 0.12,
    borderRadius: sizes.screenWidth * 0.06
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.02,
    fontSize: fontSize.smallM,
    fontWeight: '400'
  },
  heading: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '500'
  },
  headingLarge: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '700'
  },
  text1: {
    color: colors.black,
    fontSize: fontSize.smallM,
    fontWeight: '400'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenWidth * 0.02
  },
  priceContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizes.screenWidth * 0.65,
    marginTop: sizes.screenWidth * 0.02
  },
  line: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenWidth * 0.004,
    backgroundColor: colors.disabledBg,
    alignSelf: 'center',
    marginVertical: sizes.screenHeight * 0.015
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: sizes.screenHeight * 0.02
  },
  acceptBtn: {
    backgroundColor: colors.lightBlue2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.3,
    paddingVertical: sizes.screenHeight * 0.015,
    borderRadius: sizes.screenWidth * 0.08
  },
  declineBtn: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizes.screenWidth * 0.3,
    paddingVertical: sizes.screenHeight * 0.014,
    borderRadius: sizes.screenWidth * 0.08,
    borderColor: colors.disabledBg,
    borderWidth: 1
  },
  btnImg: {
    width: sizes.screenWidth * 0.045,
    height: sizes.screenWidth * 0.045,
  },
  acceptBtnText: {
    color: colors.white,
    marginLeft: sizes.screenWidth * 0.01
  },
  declineBtnText: {
    color: colors.black,
    marginLeft: sizes.screenWidth * 0.01
  },
  blueText: {
    fontSize: fontSize.small,
    fontWeight: '500',
    color: colors.lightBlue2
  },
  viewAllContainer:{
    alignSelf:'flex-end',
    borderColor:colors.lightBlue2,
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:sizes.screenWidth * 0.015,
    marginTop:sizes.screenHeight * 0.02,
    width:sizes.screenWidth * 0.25,
    borderRadius:sizes.screenWidth * 0.05
  },
  viewAllText:{
    color:colors.btnBlue,
    marginRight:sizes.screenWidth * 0.01,
    fontSize:fontSize.small
  },
  viewAllArrow:{
    width:sizes.screenWidth * 0.03,
    height:sizes.screenWidth * 0.03,
    resizeMode:'contain'
  }
});
