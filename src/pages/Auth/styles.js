import {StyleSheet} from 'react-native';
import {perfectSize, colors, fonts} from '../../theme';
export default styles = StyleSheet.create({
  container: {flex: 1},
  loginView: {
    flex: 1,
    paddingTop: perfectSize(56),
    padding: perfectSize(23),
    backgroundColor: colors.primaryLoginBackgroundColor,
  },
  signupView: {
    flex: 1,
    paddingTop: perfectSize(56),
    padding: perfectSize(23),
    backgroundColor: colors.primarySignupBackgroundColor,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.quicksandBold,
    fontSize: perfectSize(65),
    color: colors.primaryLightColor,
    opacity: 0.5,
  },
  socialMediaIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
  },
  buttonContainer: {
    height: perfectSize(55),
    width: perfectSize(300),
    borderRadius: perfectSize(30),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primaryLightColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 2,
    elevation: 24,
  },
  buttonTitle: {
    fontSize: perfectSize(18),
    fontFamily: fonts.quicksandBold,
    color: colors.primaryTextColor,
  },
});
