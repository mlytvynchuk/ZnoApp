import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
class SubjectTest extends Component {
    state = {
        name: this.props.name,
        questions: this.props.questions,
        currentQuestion: [],
        answers: []
    }
    componentDidMount() {
        let currentQuestion = {};
        let acceptingAnswers = true;
        let score = 0;
        let questionCounter = 0;
        let questions = [...this.state.questions];
        let answers = [];
        correctAnswer = null;
        startGame = () => {
            questionCounter = 0;
            score = 0;
            getNewQuestion();
        }

        getNewQuestion = (value = null) => {

            if (questionCounter < questions.length) {
                correctNumber = currentQuestion.answer;
                if (correctNumber)
                    currentQuestion = questions[questionCounter];
                answers.push(value);

                this.setState({
                    currentQuestion: currentQuestion,
                    answers: [answers]
                })

                questionCounter++;
            }
        }
        startGame();

    }
    render() {
        const { currentQuestion } = this.state;
        if (currentQuestion.type === 'choice')
            return (
                <View>
                    <Text>{this.state.name}</Text>
                    <Text style={styles.h2}> {currentQuestion.question}</Text>
                    <TouchableOpacity onPress={(value) => getNewQuestion(currentQuestion.choice1)} style={styles.choiceContainer}>
                        <Text style={styles.choicePrefix}>A</Text>
                        <Text style={styles.choiceText} data-number="1">{currentQuestion.choice1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => getNewQuestion(currentQuestion.choice2)} style={styles.choiceContainer}>
                        <Text style={styles.choicePrefix}>Б</Text>
                        <Text style={styles.choiceText} data-number="2">{currentQuestion.choice2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => getNewQuestion(currentQuestion.choice3)} style={styles.choiceContainer}>
                        <Text style={styles.choicePrefix}>В</Text>
                        <Text style={styles.choiceText} data-number="3">{currentQuestion.choice3}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(value) => getNewQuestion(currentQuestion.choice4)} style={styles.choiceContainer}>
                        <Text style={styles.choicePrefix}>Г</Text>
                        <Text style={styles.choiceText} data-number="4">{currentQuestion.choice4}</Text>
                    </TouchableOpacity>
                    <Text>Answers</Text>
                    {this.state.answers.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </View>
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
        backgroundColor: "white"
    }

});
export default SubjectTest;