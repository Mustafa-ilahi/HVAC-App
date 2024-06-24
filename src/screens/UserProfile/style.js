import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer:{
        width: sizes.screenWidth,
        height: sizes.screenHeight,
        backgroundColor: colors.blugBg,
        paddingHorizontal: sizes.screenWidth * 0.04,
        paddingTop:sizes.screenHeight * 0.03
    },

    videoPoster:{
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.3,
        marginTop:sizes.screenHeight * 0.03
    },

    videoCaptionOne: {
        fontSize: fontSize.large,
        width: sizes.screenWidth * 0.55,
        color: colors.white,
        paddingTop:sizes.screenHeight * 0.2,
        paddingLeft:sizes.screenWidth * 0.04,
      },

      bottomBtn:{
        alignSelf:"center",
        marginVertical:sizes.screenHeight * 0.03
      },

      imgStyle:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.35,
        height:sizes.screenHeight * 0.25,
        marginLeft:sizes.screenWidth * 0.01,
        marginLeft:sizes.screenWidth * 0.02,
        marginBottom:sizes.screenWidth * 0.02,
      },

      color:{
        color:'#797979'
      },

      warningImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.07,
        height:sizes.screenHeight * 0.04,
      },

      warningTitle:{
        color:colors.black,
        fontSize:fontSize.small
      },

      warningView:{
        borderRadius:sizes.screenWidth * 0.04,
        height:sizes.screenHeight * 0.09,
        justifyContent:'space-between',
        backgroundColor:colors.white,
        marginTop:sizes.screenHeight * 0.02,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:sizes.screenWidth * 0.03
      },

      singleWarning:{
        alignItems:'center',
      },
})