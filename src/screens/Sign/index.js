import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MyInput from '../../components/MyInput';
import Btn from '../../components/Btn';

export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      emailValidate: ''
    };
  }

  static navigationOptions = {
    header: null,
  };

  validate = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      console.warn("Email is Not Correct");
      this.setState({ email })
      return false;
    } else {
      this.setState({ email })
      console.warn("Email is Correct");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign Up</Text>
        <MyInput
          placeholder='Username'
          myReturn='username'
          onChangeText={(username) => this.setState({ username })}
          secure='false'
          myvalue={this.state.username}
        />
        <MyInput
          placeholder='Email'
          myReturn='email'
          onChangeText={(email) => this.validate(email)}
          myvalue={this.state.email}
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