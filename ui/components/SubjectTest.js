import React, {
    Component,
    PanResponder,
    Animated
} from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native'
import CheckBox from 'react-native-check-box'
import update from 'react-addons-update'
import Lightbox from 'react-native-lightbox'


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
        let result = 0
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
            // alert(answer)
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
        handleMultipleCheckBoxes = (index, value) => {
            const { currentQuestionIndex, answers } = this.state;
            answers[currentQuestionIndex][index] = value;
        }
        calculateResult = () => {
            const { answers, questions } = this.state;
            let answArr = [];
            let res = 0;
            for (var i = 0; i < questions.length; i++) {
                // let question = questions[i];

                // if (answers[i] === question.answer) {
                //     result += question.value;
                // }
                if (answers[i] == this.state.questions[i].answer) {
                    res += this.state.questions[i].value
                }
            }
            alert(res);
            result = 0;
        }

    }



    render() {
        const { currentQuestion, name, questions, currentQuestionIndex } = this.state;
        const questionsList = (
            <ScrollView horizontal style={styles.questionsList}>
                {this.state.questions && this.state.questions.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.questionListItem} onPress={() => getQuestionById(index)} >
                        <Text style={{ fontWeight: "500", fontSize: 15, color: "#fff" }}>{index + 1}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        )
        const brBlock = (index) => {
            if (index > 1 && index % 2 == 0) {
                return (
                    <Text>{"\n"}</Text>
                )
            }
        }
        const LightboxView = ({ navigator }) => (
            <Lightbox navigator={navigator}>
                {imageQuestion}
            </Lightbox>
        );
        const multipleChoiceList = (
            <View>
                <View style={styles.choicesBoxContainer}>
                    {this.state.currentQuestion.choices && this.state.currentQuestion.choices.map((item, index) => (
                        <View key={index} style={styles.choicesBoxContainer}>
                            <Text style={{ marginRight: 5, fontWeight: "500" }}>
                                {index + 1}
                            </Text>
                            <View style={styles.choicesBox}>
                                <TextInput width="100%" maxLength={1} fontWeight="500" fontSize="15" />

                            </View>
                            {brBlock(index + 1)}
                        </View>

                    ))}
                </View>


            </View>
        )
        const choiceList = (
            <View style={styles.choicesList}>
                {this.state.currentQuestion.choices && this.state.currentQuestion.choices.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.checkBoxContainer}>
                        <CheckBox
                            style={{ flex: 1 }}
                            onClick={() => handleCheckBox(index, item)
                            }
                            isChecked={isChecked(index)}
                            checkedImage={<Image source={require('../assets/img/checkbox/checked.png')} style={{ width: 35, height: 35 }} />}
                            unCheckedImage={<Image source={require('../assets/img/checkbox/unchecked.png')} style={{ width: 35, height: 35 }} />}

                        //unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon} />}
                        />
                        <Text style={{ fontSize: 15, fontWeight: "400" }}>{item}</Text>
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
        const answerArea = currentQuestion.type == "answer" ? answerInput : currentQuestion.type == "choices" ? choiceList : multipleChoiceList;
        const prevQuestion = currentQuestionIndex > 0 ? (

            <TouchableOpacity onPress={() => getQuestionById(currentQuestionIndex - 1)}>
                <Text style={styles.prevQuestionText}>Попереднє питання</Text>
            </TouchableOpacity>
        ) : null;
        const nextQuestion = (
            <View style={styles.nextContainer}>
                {prevQuestion}
                <TouchableOpacity onPress={() => getQuestionById(currentQuestionIndex + 1)}>
                    <Text style={styles.nextText}>Наступне запитання</Text>
                </TouchableOpacity>
            </View>
        )

        const nextResult = (
            <View style={styles.nextContainer}>
                {prevQuestion}
                <TouchableOpacity onPress={() => calculateResult()}>
                    <Text style={styles.nextResultText}>Завершити роботу</Text>
                </TouchableOpacity>
            </View>
        )
        const imageQuestion = (
            <View>
                <Image source={currentQuestion.image} style={styles.imageQuestion} resizeMode={'center'} resizeMethod={'resize'} style={{ width: 500 }} />
            </View>
        )
        const next = currentQuestionIndex == questions.length - 1 ? nextResult : nextQuestion;
        return (
            <ScrollView>
                <View style={styles.nextContainer}>
                    <TouchableOpacity onPress={() => calculateResult()}>
                        <Text style={styles.nextResultText}>Результат</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => calculateResult()}>
                        <Text>0:00:00</Text>
                    </TouchableOpacity>
                </View>
                {questionsList}
                <View>
                    <Lightbox>
                        <ScrollView maximumZoomScale={4} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                            {imageQuestion}
                        </ScrollView>
                    </Lightbox>
                </View>
                < View style={styles.quizContainer}>
                    <Text style={styles.title}>{currentQuestion.question}</Text>
                </View >
                <View>
                    {answerArea}
                </View>
                <View>
                    {next}
                </View>
            </ScrollView >
        )
    }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FDFFFC",
        flexDirection: "column",
        height: "100%"
    },
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
        marginRight: 5,
        fontSize: 15,
        fontWeight: "400",
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: "#17B2D1",
        borderRadius: 7,
        color: "#fff"
    },
    checkBoxContainer: {
        display: "flex",
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        alignItems: "center",
        marginRight: 10
    },
    choicesList: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    answerInput: {
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        height: 50
    },
    choicesBox: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        backgroundColor: "#f7f7f7",
        borderRadius: 7,
    },
    choicesBoxContainer: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
        marginTop: 0

    },
    nextContainer: {
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"

    },
    nextText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#17B2D1"
    },
    nextResultText: {
        fontSize: 15,
        fontWeight: "500",
        color: "#FF0755",
        paddingBottom: 5
    },
    prevQuestionText: {
        fontSize: 15,
        fontWeight: "400",
        color: "#B0B9BF"
    },
    imageQuestion: {
        display: "flex",
        width: win.width
    }

})
export default SubjectTest
