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

  sessionText: {
    color: colors.gray,
    width: sizes.screenWidth * 0.7,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.02,
  },

  sessionOptionalText: {
    color: colors.black,
    fontWeight: '600',
  },

  sessionImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.13,
    marginTop: sizes.screenHeight * 0.01,
    borderRadius: sizes.screenWidth * 0.03,
    // backgroundColor:"red"
  },

  serverProfileImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.06,
    borderRadius: sizes.screenWidth * 0.1,
  },

  sessionIssueName: {
    color: colors.black,
    fontWeight: '500',
    fontSize: fontSize.medium,
  },

  sessionIssue: {
    color: colors.black,
    // backgroundColor:'red',
    height: sizes.screenHeight * 0.23,
    width: sizes.screenWidth * 0.7,
    textAlignVertical: 'top',
  },
  issueMainView: {
    flexDirection: 'row',
    padding: sizes.screenWidth * 0.03,
    borderWidth: 1,
    height: sizes.screenHeight * 0.3,
    borderRadius: sizes.screenWidth * 0.03,
    marginTop: sizes.screenWidth * 0.06,
    backgroundColor: colors.white,
    borderColor: colors.lightGray2,
  },

  textView: {
    marginLeft: sizes.screenWidth * 0.02,
    marginTop: sizes.screenWidth * 0.01,
  },

  bottomButton: {
    alignSelf: 'center',
    marginTop: sizes.screenHeight * 0.22,
  },

  modalMainView: {
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.4,
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: sizes.screenWidth * 0.04,
  },

  tickImg: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.17,
    height: sizes.screenHeight * 0.08,
    marginTop:sizes.screenHeight * 0.04,
    marginBottom:sizes.screenHeight * 0.01,
    // backgroundColor:'red'
  },

  secondModalView: {
    alignSelf: 'center',
    alignItems: 'center'
},

modalText1:{
    color:colors.lightBlue2,
    fontWeight:'600',
    fontSize:fontSize.medium,
    marginBottom:sizes.screenHeight * 0.01,
},
modalText2:{
    color:colors.black,
    textAlign:'center',
    width:sizes.screenWidth * 0.6,
    marginBottom:sizes.screenHeight * 0.04,
    fontSize:fontSize.large
},

modalBottmButton:{
    width:sizes.screenWidth * 0.5,
    height:sizes.screenHeight * 0.06,
    borderRadius:sizes.screenWidth * 0.3,
    backgroundColor:colors.lightBlue2,
    justifyContent:'center'
},

buttonText:{
    color:colors.white,
    textAlign:'center',
},
});
