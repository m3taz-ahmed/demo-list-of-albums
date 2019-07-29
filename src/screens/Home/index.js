
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import  MyList  from '../../components/MyList';

export default class App extends React.Component {
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
    }else{
      return (
        <View>
          <MyList
              arrayOfData={this.state.arrayOfData} 
              navigation={this.props.navigation}
          />
        </View>
      )
    }   
  }
}



