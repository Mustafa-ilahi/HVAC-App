import {StyleSheet} from 'react-native';
import {colors, fontSize, sizes} from '../../services';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blugBg,
    height: sizes.screenHeight,
  },
  containerCheck: {
    flex: 1,
    marginBottom: sizes.screenHeight * 0.12,
    backgroundColor: 'red',
    // height: sizes.screenHeight * 0.2,
  },
  calender: {
    height: sizes.screenHeight * 0.2,
    // backgroundColor: 'red',
    gap: sizes.screenWidth * 0.1,
  },

  header: {
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 0.4,
    marginBottom: sizes.screenHeight * 0.12,
  },

  arrowTop: {
    // marginLeft: sizes.screenWidth * 0.01,
    marginTop: sizes.screenHeight * 0.06,
  },
  headerText: {
    // backgroundColor: 'orange',
    fontSize: fontSize.h7,
    color: 'black',
    width: sizes.screenWidth * 0.8,
    marginTop: sizes.screenHeight * 0.06,
    textAlign: 'center',
    fontWeight: '700',
  },
  allignment: {
    // backgroundColor : 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.01,
  },
  topContentcontainer: {
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.052,
    marginRight: sizes.screenWidth * 0.052,
    // backgroundColor: 'red',
  },

  rowcontainer: {
    marginRight: sizes.screenWidth * 0.052,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datesHeading: {
    color: 'black',
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  redTriangle: {
    height: sizes.screenHeight * 0.012,
  },
  spaceTop: {
    marginTop: sizes.screenHeight * 0.022,
    marginRight: sizes.screenWidth * 0.022,
    // backgroundColor: 'red',
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.482,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 200,
    flex: 1,
  },
  days: {
    color: 'black',
    fontSize: fontSize.small,
  },
  dates: {
    color: 'black',
    fontSize: fontSize.large,
    fontWeight: '900',
  },

  timeContainer: {
    marginTop: sizes.screenHeight * 0.03,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: sizes.screenWidth * 0.09,
  },

  heading: {
    color: colors.gray,
    marginTop: sizes.screenHeight * 0.02,
    marginBottom: sizes.screenHeight * 0.03,
  },

  timeAlligment: {
    flexDirection: 'row',
    gap: sizes.screenWidth * 0.02,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bookContainer: {
    marginTop: sizes.screenHeight * 0.04,
    marginLeft: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.05,
    gap: sizes.screenHeight * 0.01,
  },
  selected: {
    width: sizes.screenWidth * 0.26,
    height: sizes.screenHeight * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.lightBlue2,
  },
  notSelected: {
    width: sizes.screenWidth * 0.26,
    height: sizes.screenHeight * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightBlue2,
  },
  selectedTextcolor: {
    color: colors.white,
    fontWeight: '600',
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBlack: {
    color: colors.lightBlue2,
    fontWeight: '500',
  },
  change: {
    color: colors.btnColor,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderColor: colors.btnColor,
  },
  crossbtn: {
    height: sizes.screenHeight * 0.028,
    width: sizes.screenWidth * 0.05,
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.screenWidth * 0.02,
  },
  imageContainer: {
    width: sizes.screenWidth * 0.16,
    height: sizes.screenHeight * 0.07,
    borderRadius: sizes.screenWidth * 0.04,
  },
  barberContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barberName: {
    color: colors.black,
    fontWeight: '500',
  },
  time: {
    color: colors.durationColor,
  },
  nameTimecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barberNameImage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.screenWidth * 0.04,
  },
  marginTop: {
    marginTop: sizes.screenHeight * 0.02,
    borderWidth: 1,
    width: sizes.screenWidth * 0.16,
    alignItems: 'center',
    height: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    borderRadius: sizes.screenWidth * 0.02,
    borderColor: colors.black,
  },
  priceSmalltext: {
    color: colors.black,
    fontSize: fontSize.small,
  },
  total: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.screenWidth * 0.03,
    marginTop: sizes.screenHeight * 0.02,
    borderBottomWidth: 1,
  },

  totalText: {
    fontSize: fontSize.small,
    color: colors.black,
    fontWeight: '400',
    marginBottom: sizes.screenHeight * 0.01,
    borderColor: colors.lightBordercolor,
  },
  priceBlack: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '900',
    marginBottom: sizes.screenHeight * 0.01,
  },
  addAnotherservice: {
    color: colors.btnColor,
    fontWeight: '600',
    borderColor: colors.btnColor,
  },
  paymentBorder: {
    marginTop: sizes.screenHeight * 0.03,
    borderTopWidth: 1,
    borderColor: colors.lightBordercolor,
    gap: sizes.screenHeight * 0.02,
  },
  paymentTitle: {
    marginTop: sizes.screenHeight * 0.03,
    marginLeft: sizes.screenWidth * 0.05,
    marginRight: sizes.screenWidth * 0.05,
  },
  title: {
    color: colors.black,
    fontWeight: '500',
  },
  credtDebit: {
    flexDirection: 'row',
    marginLeft: sizes.screenWidth * 0.07,
    marginRight: sizes.screenWidth * 0.07,
    justifyContent: 'space-between',
  },
  creditText: {
    color: colors.black,
    fontSize: fontSize.large,
    fontWeight: '700',
  },
  blackPlusbox: {
    backgroundColor: colors.black,
    justifyContent: 'center',
    height: sizes.screenHeight * 0.03,
  },
  starSize: {
    height: sizes.screenHeight * 0.014,
  },
  cardDetailscontainer: {
    marginLeft: sizes.screenWidth * 0.08,
    marginRight: sizes.screenWidth * 0.08,
    borderWidth: 1,
    height: sizes.screenHeight * 0.05,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: sizes.screenHeight * 0.01,
    borderColor: colors.lightBordercolor,
    justifyContent: 'space-between',
  },
  masterCard: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.1,
  },
  cardText: {
    color: colors.durationColor,
  },
  arrowRight: {
    height: sizes.screenHeight * 0.02,
    paddingRight: sizes.screenWidth * 0.09,
  },
  btnMargin: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: sizes.screenHeight * 0.07,
  },
  textContainer: {
    marginTop: sizes.screenHeight * 0.01,
    width: sizes.screenWidth * 0.37,
  },
  availabiilityText: {
    color: colors.gray,
    fontSize: fontSize.smallM,
    marginBottom: sizes.screenHeight * 0.01,
  },

  inputFieldMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: sizes.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.03,
    paddingHorizontal: sizes.screenWidth * 0.03,
    borderColor: colors.gray,
  },

  timeImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenWidth * 0.06,
  },

  textInputField: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontWeight: '500',
    marginLeft: sizes.screenWidth * 0.01,
    width: sizes.screenWidth * 0.1,
    flex: 1,
  },

  hoursText: {
    color: colors.gray,
    marginLeft: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.05,
    marginBottom: sizes.screenHeight * 0.005,
  },

  color: {
    color: colors.black,
    marginLeft: 5,
    fontWeight: '600',
    fontSize: fontSize.large,
  },
});
