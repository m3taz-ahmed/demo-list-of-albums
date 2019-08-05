import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MyInput from '../../components/MyInput';
import Btn from '../../components/Btn';

export default class Login extends React.Component {
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
          <Text style={styles.welcome}>Login</Text>
          <MyInput
            placeholder='Username'
            myReturn='username'
            onChangeText={(username) => this.setState({ username })}
            myvalue={this.state.username}
            secure='false'
          />
          <MyInput
            placeholder='Password'
            myReturn='password'
            onChangeText={(password) => this.setState({ password })}
            myvalue={this.state.password}
            secure='true'
          />
          <Btn
            press='Home'
            btnText='Login'
            type='nav'
            navigation={this.props.navigation}
          />
          <Text style={styles.text}>-- OR -- </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {this.props.navigation.navigate('Sign')}}
          >
            <Text style={styles.btnText}>Sign up Here</Text>
          </TouchableOpacity>
          
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
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: -5
  },
  btn: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#428AF8',
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
      color: '#ffffff',
      fontWeight: '700'
  }
  });