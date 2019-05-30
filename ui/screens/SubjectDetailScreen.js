import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Button } from 'react-native-elements';
import SubjectTest from '../components/SubjectTest';

class SubjectDetailScreen extends Component {
    state = {
        subject: this.props.navigation.getParam('subject'),
        tests: this.props.navigation.getParam('tests')
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('subject').name,
            headerStyle: {
                // backgroundColor: '#f4511e',
                // backgroundColor: '#f7f7f7',
                marginTop: 25,
                borderBottom: "none",
                shadowColor: "transperent",
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },


            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,

            },
            headerTintColor: "black",
            headerLeftStyle: {
                color: "black"
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.subject.tests.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.list}
                        onPress={() => this.props.navigation.navigate(
                            "SubjectTest",
                            {
                                name: item.name,
                                questions: item.questions
                            })}
                    >
                        <Text style={styles.listText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: "#f7f7f7",
        flex: 1,
        flexDirection: "column"
    },
    h1: {
        fontSize: 25,
        fontWeight: "700",
        textAlign: "right",
        width: "100%"
    },
    BackButton: {
        // color: "#f5f5f5",
        margin: 15,
        fontSize: 15
    },
    list: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        padding: 20,
        fontSize: 25,
        backgroundColor: "#fff"
    },
    listText: {
        fontWeight: "500"
    },
})
export default SubjectDetailScreen
