import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
    bgImg:{
        width:sizes.screenWidth,
        height:sizes.screenHeight,
    },

    mainContainer:{
        alignItems:'center',
    },

    profileImg:{
        resizeMode:'contain',
        width:sizes.screenWidth * 0.4,
        height:sizes.screenHeight * 0.2,
        borderWidth:sizes.screenWidth * 0.02,
        borderColor:'#C5E2FE',
        borderRadius:sizes.screenWidth * 0.3,
        marginTop:sizes.screenHeight * 0.28,
    },

    headingStyle:{
        color:colors.black,
        fontSize:fontSize.h5,
        fontWeight:'600',
        marginTop:sizes.screenHeight * 0.02,
    },

    paraStyle:{
        color:colors.black,
        fontSize:fontSize.large,
        width:sizes.screenWidth * 0.7,
        textAlign:'center',
        marginTop:sizes.screenHeight * 0.02,
    },

    bottmBtn:{
        alignItems:'center',
        marginTop:sizes.screenHeight * 0.27,
    },
})