import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {images, perfectSize} from '../theme';
export default function SocialMediaIcon(props) {
  return (
    <TouchableOpacity>
      <Image source={props.source} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    height: perfectSize(100),
    width: perfectSize(100),
    resizeMode: 'contain',
  },
});
