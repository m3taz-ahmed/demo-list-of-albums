/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';

import { MyHeader } from './components/MyHeader';
import { MyAlbum } from './components/MyAlbum';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          arrayOfData: responseJson,
        }, function () {

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 50 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View>
        <MyHeader title='Albums!' textstyle={styles.header} />
        <MyAlbum arrayOfData={this.state.arrayOfData} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  header: {
    height: 50,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});
