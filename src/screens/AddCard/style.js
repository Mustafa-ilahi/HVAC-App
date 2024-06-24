import { StyleSheet } from "react-native";
import { colors, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    backgroundColor: colors.blugBg,
    paddingHorizontal: sizes.screenWidth * 0.04,
    paddingTop:sizes.screenHeight * 0.03
},

creditCard:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.85,
    height:sizes.screenHeight * 0.25,
    alignSelf:'center'
    // backgroundColor:'red'
},

inputFieldRow:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    paddingHorizontal:sizes.screenWidth * 0.03,
    width:sizes.screenWidth * 0.85,
    alignSelf:'center',
    borderRadius:sizes.screenWidth * 0.06,
    marginTop:sizes.screenHeight * 0.03,
    backgroundColor:colors.white,
    borderColor:colors.grayBorder
},

creditCardImgStyle:{
    resizeMode:'contain',
    width:sizes.screenWidth * 0.05,
    height:sizes.screenHeight * 0.025,
},

textInput:{
    width:sizes.screenWidth * 0.65,
    marginLeft:sizes.screenWidth * 0.02,
    color:colors.black
},

fledRow:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
},

bottomView:{
    flexDirection:'row',
    alignItems:'center',
    width:sizes.screenWidth * 0.41,
    borderWidth:1,
    borderRadius:sizes.screenWidth * 0.06,
    borderColor:colors.grayBorder,
    paddingHorizontal:sizes.screenWidth * 0.03,
    height:sizes.screenHeight * 0.06,
    marginLeft:sizes.screenWidth * 0.03,
    marginTop:sizes.screenWidth * 0.04,
},

textInputOne:{
    color:colors.black,
    // backgroundColor:'red',
    width:sizes.screenWidth * 0.25,
},

bottmButton:{
    alignSelf:'center',
    position:'absolute',
    bottom:sizes.screenHeight * 0.05
},
})