import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import SubjectTest from '../components/SubjectTest';

class SubjectDetailScreen extends Component {
    state = {
        name: this.props.navigation.getParam('name'),
        tests: [
            {
                name: "Зно з математики 2018",
                questions: [
                    {
                        type: "choice",
                        question: "Скільки буде 5+5",
                        choice1: "3",
                        choice2: "8",
                        choice3: "10",
                        choice4: "5",
                        answer: 3
                    },
                    {
                        type: "choice",
                        question: "Скільки буде 7+5",
                        choice1: "3",
                        choice2: "11",
                        choice3: "10",
                        choice4: "12",
                        answer: 4
                    },
                    {
                        type: "choice",
                        question: "Скільки буде 8+5",
                        choice1: "3",
                        choice2: "11",
                        choice3: "13",
                        choice4: "12",
                        answer: 3
                    },
                ]

            },
            {
                name: "Зно з математики 2019",
                questions: [
                    {
                        type: "choice",
                        question: "Скільки буде 5+5",
                        choice1: "3",
                        choice2: "11",
                        choice3: "10",
                        choice4: "12",
                        answer: 3
                    },
                    {
                        type: "choice",
                        question: "Скільки буде 7+5",
                        choice1: "3",
                        choice2: "11",
                        choice3: "10",
                        choice4: "12",
                        answer: 4
                    }
                ]

            },

        ]
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
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
                paddingBottom: 10,
            },
        }
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.tests.map((item, index) => (
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
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 10
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
        borderBottomColor: '#f9f7f5',
        borderBottomWidth: 2,
        padding: 20,
        fontSize: 25,
    },
    listText: {
        fontWeight: "500"
    },
})
export default SubjectDetailScreen
