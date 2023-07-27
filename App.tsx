/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from './src/constants/colors';
import HomeScreen from './src/screens/home.screen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});

export default App;
