import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {perfectSize, colors, fonts} from '../theme';
export default function CustomTextInput(props) {
  return (
    <TextInput
      style={[styles.textInput, {...props.style}]}
      placeholder={props.placeholder}
      placeholderTextColor={colors.textInputPlaceholderColor}
      selectionColor={colors.selectionTintColor}
      autoCapitalize="none"
      blurOnSubmit={false}
      secureTextEntry={props.secureTextEntry ? true : false}
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    padding: perfectSize(20),
    height: perfectSize(70),
    width: '70%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: perfectSize(12),
    fontSize: perfectSize(23),
    fontFamily: fonts.quicksandBold,
    color: colors.primaryLightColor,
    marginTop: '40%',
    alignSelf: 'center',
  },
});
