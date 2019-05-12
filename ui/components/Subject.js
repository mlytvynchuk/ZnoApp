import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Subject extends React.Component {
    state = {
        name: null,
        tests: []
    }
    render() {
        return (
            <Text>{this.state.name}</Text>
        )


    }

}