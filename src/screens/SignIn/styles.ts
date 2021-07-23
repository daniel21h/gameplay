import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },

  illustration: {
    width: '100%',
    height: 360,
  },

  content: {
    marginTop: -80,
    alignItems: 'center',
    padding: 50,
  },

  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    maxWidth: 259,
  },

  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    maxWidth: 247,
    fontSize: 15,
    marginBottom: 48,
  },
})