
import React, { Component } from 'react';
import { View, StyleSheet ,ActivityIndicator } from 'react-native';

// import { MyHeader } from '.../components/MyHeader';
import  MyList  from '../../components/MyList';
import { styles } from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }
  
  static navigationOptions = {
    header: null,
  };

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
        <MyList
            arrayOfData={this.state.arrayOfData} 
            navigation={this.props.navigation}
        />
      </View>
    );
  }
}



