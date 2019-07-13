/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { MyHeader } from './components/MyHeader';
import { MyAlbum } from './components/MyAlbum';

const App = () => {
  return (
    <View>
      <MyHeader title='Albums!' textstyle={styles.header}/>
      <MyAlbum/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
