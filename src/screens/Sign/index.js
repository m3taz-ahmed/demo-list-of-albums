import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MyInput from '../../components/MyInput';
import Btn from '../../components/Btn';

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:'',password:''};
  }
  
  static navigationOptions = {
    header: null,
  };  

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Sign Up</Text>
          <MyInput
            placeholder='Username'
            myReturn='username'
            secure='false'
          />
          <MyInput
            placeholder='Email'
            myReturn='email'
            secure='false'
          />
          <MyInput
            placeholder='Password'
            myReturn='password'
            secure='true'
          />
          <Btn
            press='Home'
            btnText='Sign Up'
            type='nav'
            navigation={this.props.navigation}
          />          
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});