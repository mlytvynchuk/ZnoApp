import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
class SubjectList extends Component {
    state = {
        subjects: this.props.subjects
    }
    render() {
        return (
            <View>
                {this.state.subjects && this.state.subjects.map((item, index) => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SubjectDetail", { subject: item })} key={index} style={stylesList.container} >
                        <Text style={stylesList.text}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )
                )}
            </View>
        )
    }
}
export default SubjectList;

const stylesList = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 15,
        backgroundColor: '#ffff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
        // alignItems: 'center',
    },
    text: {
        // color: '#4f603c',
        fontWeight: "500",
        fontSize: 15,
    }
})
