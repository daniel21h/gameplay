import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  illustration: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -60,
    alignItems: 'center',
    padding: 50,
  },

  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    maxWidth: 260,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },

  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    maxWidth: 250,
    fontSize: 15,
    marginBottom: 48,
    fontFamily: theme.fonts.text400,
    lineHeight: 25,
  },
})