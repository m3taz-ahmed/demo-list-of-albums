import React, { Component } from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';

import MyAlbum from '../../components/MyAlbum';
// import { styles } from './styles';

export default class Details extends Component {  

  constructor(props) {
      super(props);
    }

    static navigationOptions = {
      header: null,
    };

  render() {
    return (
      <View style={{flex:1}}>
        <MyAlbum navigation={this.props.navigation} />
      </View> 
    );
  }
}