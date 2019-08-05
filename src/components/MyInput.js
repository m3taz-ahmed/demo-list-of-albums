import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default class MyInput extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value:''};
    }

    render() {
        // console.warn('MyInput ', this.props)
        
        if(this.props.secure === 'true'){
            return (
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    value={this.props.myvalue}
                    secureTextEntry={true}
                />
            )
        }else{
            return (
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    value={this.props.myvalue}
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