import React from 'react';
import { Text, Dimensions ,View } from 'react-native';

export const MyHeader = ({ title, textstyle }) => (
    <View>
        <Text style={textstyle}>{title}</Text>
    </View>
);

