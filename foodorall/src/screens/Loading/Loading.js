import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export const LoadingScreen = () => {
  
    return (
      <View style={styles.preloader}>
      <ActivityIndicator size="large" color="#9E9E9E"/>
    </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});