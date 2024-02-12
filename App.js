import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Map from './screens/map';

export default function App() {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <Map />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
