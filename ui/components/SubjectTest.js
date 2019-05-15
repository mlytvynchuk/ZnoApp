import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import CheckBox from 'react-native-check-box'
import update from 'react-addons-update'
import ReactStopwatch from 'react-stopwatch'
export class SubjectTest extends Component {
    state = {
        name: this.props.navigation.getParam('name'),
        questions: this.props.navigation.getParam('questions'),
        currentQuestion: {},
        isChecked: [],
        answers: [],
        currentQuestionIndex: 0,
        hours: 0,
        minutes: 0,
        seconds: 0

    }


    componentDidMount() {
        let checkedArr = []
        let answers = []
        choices = []
        let seconds = 0
        getQuestionById = (index) => {
            const { questions } = this.state;
            this.setState({
                currentQuestion: questions[index],
                currentQuestionIndex: index
            })
        }
        getQuestionById(0);
        handleCheckBox = (index, answer) => {
            const { currentQuestionIndex } = this.state;
            choices[currentQuestionIndex] = index;
            answers[currentQuestionIndex] = answer;
            this.setState({
                isChecked: choices,
                answers: answers
            })
        }
        isChecked = (index) => {
            const { currentQuestionIndex } = this.state;
            if (index === this.state.isChecked[currentQuestionIndex]) {
                return true;
            }
            return false;
        }
        handleAnswerInput = (index, answer) => {
            answers[index] = answer;
            // alert(answer);
            this.setState({
                answers: answers
            })
        }
    }



    render() {
        const { currentQuestion, name, questions, currentQuestionIndex } = this.state;
        const questionsList = (
            <ScrollView horizontal style={styles.questionsList}>
                {this.state.questions && this.state.questions.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.questionListItem} onPress={() => getQuestionById(index)} >
                        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 15 }}>{index + 1}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
        const choiceList = (
            <View style={styles.choicesList}>
                {this.state.currentQuestion.choices && this.state.currentQuestion.choices.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.checkBoxContainer}>
                        <CheckBox
                            style={{ flex: 1, padding: 10 }}
                            onClick={() => handleCheckBox(index, item)
                            }
                            isChecked={isChecked(index)}
                        //checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} style={this.props.theme.styles.tabBarSelectedIcon} />}
                        //unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon} />}
                        />
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
        const answerInput = (
            <View>
                <TouchableOpacity>
                    <TextInput style={styles.answerInput} placeholder="Введіть відповідь" onChangeText={(value) => handleAnswerInput(currentQuestionIndex, value)} value={this.state.answers[currentQuestionIndex]} />
                </TouchableOpacity>
            </View>
        )
        const answerArea = currentQuestion.type == "choices" ? choiceList : answerInput;
        const prevQuestion = currentQuestionIndex > 0 ? (

            <TouchableOpacity onPress={() => getQuestionById(currentQuestionIndex - 1)}>
                <Text>Попереднє питання</Text>
            </TouchableOpacity>
        ) : null;
        const nextQuestion = (
            <View>
                {prevQuestion}
                <TouchableOpacity onPress={() => getQuestionById(currentQuestionIndex + 1)}>
                    <Text>Наступне запитання</Text>
                </TouchableOpacity>
            </View>
        )

        const nextResult = (
            <View>
                {prevQuestion}
                <TouchableOpacity>
                    <Text>Завершити роботу</Text>
                </TouchableOpacity>
            </View>
        )
        const next = currentQuestionIndex == questions.length - 1 ? nextResult : nextQuestion;
        return (
            <View style={{ marginTop: 40 }}>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:10"
                    onChange={({ hours, minutes, seconds }) => {
                        // do something
                    }}
                    onCallback={() => alert('Finish')}
                    render={({ formatted, hours, minutes, seconds }) => {
                        return (
                            <View>
                                <Text>
                                    {formatted}
                                </Text>
                            </View>
                        );
                    }}
                />
                {questionsList}
                <View style={styles.quizContainer}>
                    <Text style={styles.title}>{currentQuestion.question}</Text>
                </View >
                <View>
                    {answerArea}
                    {next}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizContainer: {
        marginTop: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: "400",
    },
    questionsList: {
        display: "flex",
        flexDirection: "row",
    },
    questionListItem: {
        color: "white",
        marginRight: 5,
        fontSize: 15,
        fontWeight: "400",
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: "grey",
        borderRadius: 7,
    },
    checkBoxContainer: {
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center"
    },
    choicesList: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    answerInput: {
        backgroundColor: "#f7f7f7",
        textAlign: "center",
        height: 50
    }
})
export default SubjectTest
