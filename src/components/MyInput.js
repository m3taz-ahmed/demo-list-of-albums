import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {myValue:''};
    }

    render() {
        console.log('MyInput ', this.props)
        
        if(this.props.secure === 'true'){
            return (
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={(myValue) => this.setState({ myValue })}
                    value={this.state.myValue}
                    secureTextEntry={true}
                />
            )
        }else{
            return (
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={(myValue) => this.setState({ myValue })}
                    value={this.state.myValue}
                />
            )
        }
        
    }
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#428AF8',
    }
});