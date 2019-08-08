/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is a test.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#dad7dd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // I expect that all styles below detect as unused
  scrollView: {
    color: '#95722f',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    color: '#ff7069',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#9bffb0',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#485625',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#251356',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
