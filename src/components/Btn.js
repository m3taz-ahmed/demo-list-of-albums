import React from 'react';
import { Text, TouchableOpacity, StyleSheet ,Linking } from 'react-native';


export default class Btn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Btn ', this.props)

        if(this.props.type === 'link'){
            return (
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => Linking.openURL(this.props.press)}
                >
                    <Text style={styles.btnText}>{this.props.btnText}</Text>
                </TouchableOpacity>
            )
        }else if(this.props.type === 'nav'){
            return (
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.navigation.navigate(this.props.press)
                    }}
                >
                    <Text style={styles.btnText}>{this.props.btnText}</Text>
                </TouchableOpacity>
            )
        }
    }
};

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#428AF8',
        margin: 15,
        padding: 10,
        borderRadius: 5,
    },
    btnText: {
        color: '#ffffff',
        fontWeight: '700'
    }
});