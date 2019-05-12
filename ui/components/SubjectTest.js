import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
class SubjectTest extends Component {
    state = {
        name: this.props.name,
        questions: this.props.questions,
        currentQuestionIndex: 0,
        currentChoiceIndex: null,
        currentQuestion: {},
        answers: [],
        choices: []
    }
    componentDidMount() {
        let currentQuestion = {};
        let acceptingAnswers = true;
        let score = 0;
        let questionCounter = 0;
        let questions = [...this.state.questions];
        let answers = [];
        let choices = [];
        correctAnswer = null;
        startGame = () => {
            questionCounter = 0;
            score = 0;
            getQuestionByIndex(0);
        }

        handleChoice = (value, choice) => {
            const { currentQuestionIndex } = this.state;
            answers[currentQuestionIndex] = value;
            choices[currentQuestionIndex] = choice;
            this.setState({
                ...this.state,
                answers: answers,
                choices: choices,
                currentChoiceIndex: choice
            })

        }
        getQuestionByIndex = (index) => {
            questionCounter = index;
            currentQuestion = questions[index];
            this.setState({
                ...this.state,
                currentQuestion: currentQuestion,
                currentQuestionIndex: index
            })
        }
        getChecked = (index) => {
            if (choices[this.state.currentQuestionIndex] === index) {
                return styles.checked;
            }
        }
        startGame();
        onQuestion = (index) => {
            if (this.state.currentQuestionIndex === index) {
                return styles.onQuestion;
            }
            else if (this.state.answers[index] != null) {
                return styles.isDone;
            }
        }

        calculateResult = () => {
            let score = 0;
            this.state.questions.map((question, index) => {
                if (question.answer == this.state.choices[index]) {
                    score += 1;
                }
            })
            Alert.alert("Результат: " + score + " / " + questions.length);
        }
    }
    render() {
        const { currentQuestion, currentQuestionIndex } = this.state;
        const NextQuestion = (
            <TouchableOpacity onPress={() => getQuestionByIndex(currentQuestionIndex + 1)}>
                <Text style={styles.nextQuestion}>Наступне питання</Text>
            </TouchableOpacity>
        )
        const Result = (
            <TouchableOpacity onPress={() => calculateResult()}>
                <Text style={styles.result}>Завершити тест</Text>
            </TouchableOpacity>
        )
        const NextOrResult = currentQuestionIndex < this.state.questions.length - 1 ? NextQuestion : Result
        if (currentQuestion.type === 'choice')
            return (
                <View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        {this.state.questions.map((item, index) => (
                            <TouchableOpacity key={index} onPress={(ind) => getQuestionByIndex(index)}>
                                <Text style={{ ...styles.questionBox, ...onQuestion(index) }}> {index + 1}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.h2}> {currentQuestion.question}</Text>
                    <TouchableOpacity onPress={(value) => handleChoice(currentQuestion.choice1, 1)} style={{ ...styles.choiceContainer, ...getChecked(1) }}>
                        <Text style={styles.choicePrefix}>A</Text>
                        <Text style={styles.choiceText} data-number="1">{currentQuestion.choice1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => handleChoice(currentQuestion.choice2, 2)} style={{ ...styles.choiceContainer, ...getChecked(2) }}>
                        <Text style={styles.choicePrefix}>Б</Text>
                        <Text style={styles.choiceText} data-number="2">{currentQuestion.choice2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => handleChoice(currentQuestion.choice3, 3)} style={{ ...styles.choiceContainer, ...getChecked(3) }}>
                        <Text style={styles.choicePrefix}>В</Text>
                        <Text style={styles.choiceText} data-number="3">{currentQuestion.choice3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => handleChoice(currentQuestion.choice4, 4)} style={{ ...styles.choiceContainer, ...getChecked(4) }}>
                        <Text style={styles.choicePrefix}>Г</Text>
                        <Text style={styles.choiceText} data-number="4">{currentQuestion.choice4}</Text>
                    </TouchableOpacity>
                    <Text>Answers</Text>
                    {
                        this.state.answers.map((item, index) => (
                            <Text key={index}> {item}</Text>
                        ))
                    }
                    {NextOrResult}
                </View >
            )
        else {
            return null;
        }
    }
}
const styles = StyleSheet.create({
    h2: {
        fontSize: 25,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "left",
        width: "100%"
    },
    choiceContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 23,
        // width: "100%",
        borderWidth: 2,
        borderColor: "#f7f7f7",
        backgroundColor: "white"
    },
    choicePrefix: {
        padding: 15,
        backgroundColor: "#56a5eb",
        color: "#fff"
    },
    choiceText: {
        marginLeft: 10,
        fontSize: 15,
        padding: 15,
        // width: "100%",
    },
    questionBox: {
        backgroundColor: "white",
        paddingTop: 8,
        paddingLeft: 6,
        paddingRight: 10,
        paddingBottom: 8,
        marginRight: 8,
        color: "#56a5eb",
        fontSize: 18,
        borderColor: "#56a5eb",
        borderWidth: 2
    },
    nextQuestion: {
        color: "#56a5eb",
        fontSize: 20,
        paddingTop: 15,
        fontWeight: "400"
    },
    result: {
        color: "red",
        fontSize: 20,
        paddingTop: 15,
        fontWeight: "400"
    },
    checked: {
        backgroundColor: "#f7f7f7"
    },
    onQuestion: {
        opacity: 0.6
    },
    isDone: {
        backgroundColor: "#56a5eb",
        paddingTop: 8,
        paddingLeft: 6,
        paddingRight: 10,
        paddingBottom: 8,
        marginRight: 8,
        color: "white",
        fontSize: 18
    }

});
export default SubjectTest;