import { StyleSheet } from "react-native";
import { colors, fontSize, sizes } from "../../services";

export const styles = StyleSheet.create({
  headerMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.screenWidth * 0.01,
  },

  headerImgTwo: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
    marginLeft: sizes.screenWidth * 0.07,
  },

  headerImgOne: {
    resizeMode: 'contain',
    width: sizes.screenWidth * 0.03,
    height: sizes.screenHeight * 0.03,
    marginRight: sizes.screenWidth * 0.03, // Adjust margin for the back arrow icon
  },

  titleStyle: {
    flex: 1, // Let the title take up remaining space
    color: colors.black,
    fontSize: fontSize.h4,
    fontWeight: '500',
    textAlign: 'center', // Center the text horizontally
  },
});

