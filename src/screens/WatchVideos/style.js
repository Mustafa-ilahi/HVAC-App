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

    topHeading:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500',
        marginBottom:sizes.screenHeight * 0.01,
        marginTop:sizes.screenHeight * 0.02
      },

      videoImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.3,
        // backgroundColor:'red'
      },

      tipsText:{
        color:'#797979',
        marginTop:sizes.screenHeight * 0.02
      },

      tipsTextColor:{
        color:colors.lightBlue2
      },

      tip:{
        color:colors.black,
        marginTop:sizes.screenHeight * 0.01,
        marginBottom:sizes.screenHeight * 0.01,
      },

      bottmBtn:{
        alignSelf:"center",
        marginTop:sizes.screenHeight * 0.06
      },
})