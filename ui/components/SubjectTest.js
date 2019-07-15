import React, { Component, PanResponder, Animated } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import CheckBox from "react-native-check-box";
import update from "react-addons-update";
import Lightbox from "react-native-lightbox";
import CountDown from 'react-native-countdown-component';
export class SubjectTest extends Component {
  state = {
    name: this.props.navigation.getParam("name"),
    questions: this.props.navigation.getParam("questions"),
    currentQuestion: {},
    isChecked: [],
    answers: [],
    currentQuestionIndex: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    onPressLightBox: false
  };

  componentDidMount() {
    let result = 0;
    let checkedArr = [];
    let answers = [];
    choices = [];
    let seconds = 0;
    const { questions } = this.state;
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].type != "mchoices") {
        answers[i] = "";
      } else {
        answers[i] = [];
        for (var j = 0; j < questions.length; j++) {
          answers[i][j] = "";
        }
      }
    }

    this.setState({
      answers: answers
    });
    getQuestionById = index => {
      const { questions } = this.state;
      this.setState({
        currentQuestion: questions[index],
        currentQuestionIndex: index
      });
    };
    getCurrentQuestionStyle = (index) => {
      if (index == this.state.currentQuestionIndex){
        return styles.currentQuestion
      }
      else{
        return styles.questionListItem
      }
    }
    // starts our quiz:
    getQuestionById(0);
    handleCheckBox = (index, answer) => {
      const { currentQuestionIndex } = this.state;
      choices[currentQuestionIndex] = index;
      answers[currentQuestionIndex] = answer;
      // alert(answer)
      this.setState({
        isChecked: choices,
        answers: answers
      });
    };
    isChecked = index => {
      const { currentQuestionIndex } = this.state;
      if (index === this.state.isChecked[currentQuestionIndex]) {
        return true;
      }
      return false;
    };
    handleAnswerInput = (answer, index) => {
      const { currentQuestionIndex } = this.state;
      if (index != null) {
        answers[currentQuestionIndex][index] = answer;
      } else {
        answers[currentQuestionIndex] = String(answer);
      }
      // alert(answer);
      this.setState({
        answers: answers
      });
    };
    onPressLightBox = () => {
      this.setState({
        onPressLightBox: !this.state.onPressLightBox
      });
      alert("ldsads");
    };
    scrollToItem = itemIndex => {
      this._scrollQuestionsView.scrollTo({ x: itemIndex * 44 });
    };
    goToQuestionAndScroll = index => {
      getQuestionById(index);
      scrollToItem(index);
    };
    calculateResult = () => {
      const { answers, questions } = this.state;
      let answArr = [];
      let res = 0;
      for (var i = 0; i < questions.length; i++) {
        // let question = questions[i];

        // if (answers[i] === question.answer) {
        //     result += question.value;
        // }
        if (questions[i].type == "choices" || questions[i].type == "answer") {
          if (answers[i] == this.state.questions[i].answer) {
            res += this.state.questions[i].value;
          }
        } else if (questions[i].type == "mchoices") {
          for (var j = 0; j < questions[i].choices.length; j++) {
            if (answers[i][j] && answers[i][j] == questions[i].answer[j]) {
              res += questions[i].value / questions[i].choices.length;
            }
          }
        }
      }
      alert(res);
      result = 0;
    };
  }

  render() {
    const {
      currentQuestion,
      name,
      questions,
      currentQuestionIndex
    } = this.state;
    const questionsList = (
      <ScrollView
        ref={view => (this._scrollQuestionsView = view)}
        horizontal
        style={styles.questionsList}
      >
        {this.state.questions &&
          this.state.questions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.questionListItem}
              onPress={() => goToQuestionAndScroll(index)}
            >
              <Text style={{ fontWeight: "500", fontSize: 15, color: "#fff" }}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
    const brBlock = index => {
      if (index > 1 && index % 2 == 0) {
        return <Text>{"\n"}</Text>;
      }
    };
    const LightboxView = ({ navigator }) => (
      <Lightbox navigator={navigator}>{imageQuestion}</Lightbox>
    );
    const multipleChoiceList = (
      <View>
        <View style={styles.choicesBoxContainer}>
          {this.state.currentQuestion.choices &&
            this.state.currentQuestion.choices.map((item, index) => (
              <View key={index} style={styles.choicesBoxContainer}>
                <Text style={{ marginRight: 5, fontWeight: "500" }}>
                  {index + 1}
                </Text>
                <View style={styles.choicesBox}>
                  <TextInput
                    width="100%"
                    maxLength={1}
                    fontWeight="500"
                    fontSize="15"
                    onChangeText={value => handleAnswerInput(value, index)}
                    value={
                      this.state.answers[currentQuestionIndex][index] &&
                      String(this.state.answers[currentQuestionIndex][index])
                    }
                  />
                </View>
                {brBlock(index + 1)}
              </View>
            ))}
        </View>
      </View>
    );
    const choiceList = (
      <View style={styles.choicesList}>
        {this.state.currentQuestion.choices &&
          this.state.currentQuestion.choices.map((item, index) => (
            <TouchableOpacity key={index} style={styles.checkBoxContainer}>
              <CheckBox
                style={{ flex: 1 }}
                onClick={() => handleCheckBox(index, item)}
                isChecked={isChecked(index)}
                checkedImage={
                  <Image
                    source={require("../assets/img/checkbox/checked.png")}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 22,
                      padding: 20
                    }}
                  />
                }
                unCheckedImage={
                  <Image
                    source={require("../assets/img/checkbox/unchecked.png")}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 22,
                      padding: 20
                    }}
                  />
                }

                //unCheckedImage={<Image source={require('../../page/my/img/ic_check_box_outline_blank.png')} style={this.props.theme.styles.tabBarSelectedIcon} />}
              />
              <Text style={{ fontSize: 15, fontWeight: "400" }}>{item}</Text>
            </TouchableOpacity>
          ))}
      </View>
    );
    const answerInput = (
      <View>
        <TouchableOpacity>
          <TextInput
            style={styles.answerInput}
            placeholder="Введіть відповідь"
            onChangeText={value => handleAnswerInput(value)}
            value={
              this.state.answers[currentQuestionIndex] &&
              String(this.state.answers[currentQuestionIndex])
            }
          />
        </TouchableOpacity>
      </View>
    );
    const answerArea =
      currentQuestion.type == "answer"
        ? answerInput
        : currentQuestion.type == "choices"
        ? choiceList
        : multipleChoiceList;
    const prevQuestion =
      currentQuestionIndex > 0 ? (
        <TouchableOpacity
          onPress={() => goToQuestionAndScroll(currentQuestionIndex - 1)}
        >
          <Text style={styles.prevQuestionText}>Попереднє питання</Text>
        </TouchableOpacity>
      ) : null;
    const nextQuestion = (
      <View style={styles.nextContainer}>
        {prevQuestion}
        <TouchableOpacity
          onPress={() => goToQuestionAndScroll(currentQuestionIndex + 1)}
        >
          <Text style={styles.nextText}>Наступне запитання</Text>
        </TouchableOpacity>
      </View>
    );

    const nextResult = (
      <View style={styles.nextContainer}>
        {prevQuestion}
        <TouchableOpacity onPress={() => calculateResult()}>
          <Text style={styles.nextResultText}>Завершити роботу</Text>
        </TouchableOpacity>
      </View>
    );
    const next =
      currentQuestionIndex == questions.length - 1 ? nextResult : nextQuestion;
    const LightImage = () => (
      <ScrollView
        maximumZoomScale={4}
        minimumZoomScale={1}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          source={currentQuestion.image}
          style={styles.imageQuestion}
          resizeMode={"center"}
          resizeMethod={"resize"}
          width={"100%"}
        />
      </ScrollView>
    );
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={styles.nextContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ResultScreen", {
                questions: this.props.navigation.getParam("questions"),
                answers: this.state.answers,
                enterMark: 110
              })
            }
          >
            <Text style={styles.nextResultText}>Результат</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ResultScreen", {
                questions: this.props.navigation.getParam("questions"),
                answers: this.state.answers,
                enterMark: 110
              })
            }>
            <CountDown
              until={60 * 60 + 30 * 60}
              onFinish={() => alert(ca)}
              onPress={() => alert("Ваш час")}
              digitStyle={{backgroundColor: "#fff"}}
              timeToShow={['H', 'M', 'S']}
              size={13}
              timeLabels={{m: null, s: null}}
            />
          </TouchableOpacity>
        </View>
        {questionsList}
        <View>
          <Lightbox
            swipeToDissmis
            swipeToDismiss={false}
            renderContent={LightImage}
          >
            <Image
              source={currentQuestion.image}
              style={styles.imageQuestion}
              resizeMode={"contain"}
              resizeMethod={"resize"}
              width={"100%"}
              height={90}
              marginTop={15}
            />
          </Lightbox>
          <Text>Натисніть на зображення, щоб збільшити</Text>
        </View>
        <View style={styles.quizContainer}>
          <Text style={styles.title}>{currentQuestion.question}</Text>
        </View>
        <View>{answerArea}</View>
        <View>{next}</View>
      </ScrollView>
    );
  }
}
const win = Dimensions.get("window");
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
    fontWeight: "400"
  },
  questionsList: {
    display: "flex",
    flexDirection: "row"
  },
  questionListItem: {
    marginRight: 5,
    fontSize: 15,
    fontWeight: "400",
    padding: 11,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "black",
    borderRadius: 10,
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
    flexDirection: "row"
  },
  answerInput: {
    backgroundColor: "#f7f7f7",
    textAlign: "center",
    height: 50
  },
  choicesBox: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    backgroundColor: "#f7f7f7",
    borderRadius: 7
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
    color: "black",
    padding: 8
  },
  nextResultText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FF0755",
    paddingBottom: 5
  },
  prevQuestionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#B0B9BF",
    padding: 8
  },
  imageQuestion: {
    display: "flex",
    width: win.width
  },
  onPressLightBox: {
    resizeMode: "center",
    alignItems: "center"
  },
  outPressLightBox: {
    resizeMode: "stretch"
  },
  active: {
    opacity: 0.8
  },
  currentQuestion: {
    opacity: 0.5
  }
});
export default SubjectTest;
