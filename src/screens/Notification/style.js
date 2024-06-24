import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    mainContainer: {
        width: sizes.screenWidth,
        height: sizes.screenHeight,
        backgroundColor: colors.blugBg,
        paddingHorizontal: sizes.screenWidth * 0.04,
        paddingTop: sizes.screenHeight * 0.03,
      },

      notiView:{
        flexDirection:'row',
        alignItems:'center',
        width:sizes.screenWidth * 0.9,
        height:sizes.screenHeight * 0.09,
        paddingHorizontal:sizes.screenWidth * 0.02,
        backgroundColor:colors.white,
        borderRadius:sizes.screenWidth * 0.02,
        borderColor:colors.grayBorder,
        borderWidth:0.5,
        marginTop:sizes.screenHeight * 0.02
      },

      imgStyle:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.1,
        height:sizes.screenHeight * 0.05,
        borderRadius:sizes.screenWidth * 0.3
      },
      notiText:{
        color:colors.black,
        fontSize:fontSize.medium,
        fontWeight:'500'
      },
      notiText1:{
        color:colors.gray,
        fontSize:fontSize.small,
        width:sizes.screenWidth * 0.6
      },

      notiText2:{
        color:colors.gray,
        fontSize:fontSize.small,
        position:'absolute',
        left:sizes.screenWidth * 0.78,
        top:sizes.screenHeight * 0.026
      }
})