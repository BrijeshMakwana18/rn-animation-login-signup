import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {colors, images, perfectSize} from '../../theme';
import {TextInput, SocialMediaIcon} from '../../components';
const {height, width} = Dimensions.get('window');
export default function Auth() {
  //To track the component on the screen
  const [mountedComponent, setMountedComponent] = useState('Login');
  /*---------------------------------------------
  -----------------------------------------------
                  Login animations
  -----------------------------------------------
  ---------------------------------------------*/
  //Position of login component (Active by default, means visible on the screen)
  const loginPositionRight = useRef(new Animated.Value(0)).current;
  //Opacity for login items
  const loginContentOpacity = useRef(
    new Animated.Value(perfectSize(1)),
  ).current;
  //Input field width
  const loginInputWidth = useRef(
    new Animated.Value(perfectSize((width * 70) / 100)),
  ).current;
  //Login button rotation angle
  const loginButtonAngle = useRef(new Animated.Value(0)).current;
  //Left position of login button
  const loginButtonLeftPosition = useRef(
    new Animated.Value(perfectSize((width * 6) / 100)),
  ).current;
  //Top posotion of login button
  const loginButtonTopPosition = useRef(
    new Animated.Value(perfectSize((height * 90) / 100)),
  ).current;
  //Border radius for login button
  const loginButtonRadius = useRef(new Animated.Value(perfectSize(30))).current;
  //Login button rotation spin
  const loginSpin = loginButtonAngle.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  /*---------------------------------------------
  -----------------------------------------------
                  Signup animations
  -----------------------------------------------
  ---------------------------------------------*/
  //Position of signup component (Inactive by default, means not visible on the screen)
  const signupPositionLeft = useRef(
    new Animated.Value(perfectSize(((width / 2) * 70) / 100)),
  ).current;
  //Opacity for signup items
  const signupContentOpacity = useRef(
    new Animated.Value(perfectSize(0)),
  ).current;
  //Input field width
  const signupInputWidth = useRef(
    new Animated.Value(perfectSize((width * 50) / 100)),
  ).current;
  //Signup button rotation angle
  const signupButtonAngle = useRef(new Animated.Value(90)).current;
  //Right position of signup button
  const signupButtonRightPosition = useRef(
    new Animated.Value(perfectSize((width * 41.5) / 100)),
  ).current;
  //Top posotion of signup button
  const signupButtonTopPosition = useRef(
    new Animated.Value(perfectSize((height * 45) / 100)),
  ).current;
  //Border radius for signup button
  const signupButtonRadius = useRef(new Animated.Value(10)).current;
  //Signup button rotation spin
  const signupSpin = signupButtonAngle.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {});
  const onLoginPress = () => {
    //When signup component is visible and on press of login button it will animate login to it's original values
    if (mountedComponent == 'Signup') {
      //Setting login as mounted(active component)
      setMountedComponent('Login');
      Animated.parallel([
        //Hiding login component to animate signup
        Animated.timing(loginPositionRight, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginContentOpacity, {
          toValue: perfectSize(1),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginInputWidth, {
          toValue: perfectSize((width * 70) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonAngle, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonLeftPosition, {
          toValue: perfectSize((width * 6) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonTopPosition, {
          toValue: perfectSize((height * 90) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonRadius, {
          toValue: perfectSize(30),
          duration: 1000,
          useNativeDriver: false,
        }),

        //Animating signup component as it should be visible on the screen
        Animated.timing(signupPositionLeft, {
          toValue: perfectSize(((width / 2) * 70) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupContentOpacity, {
          toValue: perfectSize(0),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupInputWidth, {
          toValue: perfectSize((width * 50) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonAngle, {
          toValue: 90,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonRightPosition, {
          toValue: perfectSize((width * 41.5) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonTopPosition, {
          toValue: perfectSize((height * 45) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonRadius, {
          toValue: perfectSize(10),
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };
  const onSignupPress = () => {
    //When login component is visible and on press of signup button it will animate signup to it's new visible values
    if (mountedComponent == 'Login') {
      //Setting signup as mounted(active component)
      setMountedComponent('Signup');
      Animated.parallel([
        //Hiding signup component to animate login component
        Animated.timing(loginPositionRight, {
          toValue: perfectSize((width * 70) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginContentOpacity, {
          toValue: perfectSize(0),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginInputWidth, {
          toValue: perfectSize((width * 50) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonAngle, {
          toValue: -90,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonLeftPosition, {
          toValue: perfectSize((width * 41.5) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonTopPosition, {
          toValue: perfectSize((height * 45) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(loginButtonRadius, {
          toValue: perfectSize(10),
          duration: 1000,
          useNativeDriver: false,
        }),

        //Animating login component as it should be visible on the screen
        Animated.timing(signupPositionLeft, {
          toValue: -perfectSize(((width / 2) * 70) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupContentOpacity, {
          toValue: perfectSize(1),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupInputWidth, {
          toValue: perfectSize((width * 70) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonAngle, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonRightPosition, {
          toValue: perfectSize((width * 6) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonTopPosition, {
          toValue: perfectSize((height * 90) / 100),
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(signupButtonRadius, {
          toValue: perfectSize(30),
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <StatusBar translucent barStyle="light-content" />
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.loginView,
            {width: '170%', right: loginPositionRight},
          ]}>
          <Animated.View style={{opacity: loginContentOpacity}}>
            <Text style={styles.title}>{'Welcome\nBack'}</Text>
          </Animated.View>
          <Animated.View
            style={{width: loginInputWidth, opacity: loginContentOpacity}}>
            <TextInput placeholder="Email" style={{width: '100%'}} />
            <TextInput
              placeholder="Password"
              style={{marginTop: perfectSize(18), width: '100%'}}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.socialMediaIconContainer,
              {opacity: loginContentOpacity},
            ]}>
            <SocialMediaIcon source={images.fb} />
            <SocialMediaIcon source={images.google} />
            <SocialMediaIcon source={images.pin} />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{rotate: loginSpin}],
              left: loginButtonLeftPosition,
              top: loginButtonTopPosition,
              position: 'absolute',
              alignSelf: 'center',
              borderRadius: loginButtonRadius,
              backgroundColor: colors.primaryLightColor,
            }}>
            <TouchableOpacity
              onPress={() => onLoginPress()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>{'LOGIN'}</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.signupView,
            {width: '170%', left: signupPositionLeft},
          ]}>
          <Animated.View style={{opacity: signupContentOpacity}}>
            <Text style={styles.title}>{'Account\nSignup'}</Text>
          </Animated.View>
          <Animated.View
            style={{width: signupInputWidth, opacity: signupContentOpacity}}>
            <TextInput placeholder="Email" style={{width: '100%'}} />
            <TextInput
              placeholder="Password"
              style={{marginTop: perfectSize(18), width: '100%'}}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.socialMediaIconContainer,
              {opacity: signupContentOpacity},
            ]}>
            <SocialMediaIcon source={images.fb} />
            <SocialMediaIcon source={images.google} />
            <SocialMediaIcon source={images.pin} />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{rotate: signupSpin}],
              right: signupButtonRightPosition,
              top: signupButtonTopPosition,
              position: 'absolute',
              alignSelf: 'center',
              borderRadius: signupButtonRadius,
              backgroundColor: colors.primaryLightColor,
            }}>
            <TouchableOpacity
              onPress={() => onSignupPress()}
              style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>{'SIGNUP'}</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}
