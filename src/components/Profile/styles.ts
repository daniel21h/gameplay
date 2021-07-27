import { StyleSheet } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },

  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },

  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },

  modalTitle: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,

    textAlign: 'center',
    marginTop: 24,
  },

  modalTitleStrongWhite: {
    fontFamily: theme.fonts.title700,
  },

  modalTitleStrongRed: {
    color: theme.colors.primary,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 24,
    paddingBottom: 56,
  },

  noButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  yesButton: {
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,

    marginLeft: 8,
  },

  buttonText: {
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.heading,
  },
})