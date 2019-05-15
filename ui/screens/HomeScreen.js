import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';
import ViewController from 'react-navigation'
import SubjectList from '../containers/SubjectList';
class HomeScreen extends Component {
    state = {
        subjects: [
            {
                name: "Математика",
                tests: [
                    {
                        name: "Тест з математики зно 2017-2018",
                        questions: [
                            {
                                type: "choices",
                                question: "Скільки буде 5+5",
                                image: require('../../ui/assets/img/uncheckedBox.png'),
                                choices: ["A", "Б", "В", "Г", "Д"],
                                answer: "А",
                                value: 5
                            },
                            {
                                type: "answer",
                                question: "Скільки буде 15/5",
                                image: require('../../ui/assets/img/uncheckedBox.png'),
                                answer: "Б",
                                value: 5
                            },
                        ],

                    },
                    {
                        name: "Тест з математики зно 2018-2019",
                        questions: [
                            {
                                type: "choices",
                                question: "Скільки буде 51231+5",
                                image: require('../../ui/assets/img/uncheckedBox.png'),
                                choices: ["A", "Б", "В", "Г", "Д"],
                                answer: "А"
                            },
                            {
                                type: "answer",
                                question: "Скільки буде 15/512",
                                image: require('../../ui/assets/img/uncheckedBox.png'),
                                answer: "Б"
                            },
                        ],

                    },

                ]


            }
        ]
    }
    static navigationOptions = {
        title: 'Обери предмет',
        headerStyle: {
            // backgroundColor: '#f4511e',
            // backgroundColor: '#f7f7f7',
            marginTop: 10,
            borderBottom: "none",
            shadowColor: "transperent",
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },

        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            paddingBottom: 10,
        },
    };
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <Text style={styles.h1}>Предмети</Text> */}
                <SubjectList subjects={this.state.subjects} navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        // paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    h1: {
        fontSize: 40,
        // marginBottom: 20,
        fontWeight: "700",
        textAlign: "left",
        width: "100%"
    },
});

export default HomeScreen;


