import React, { Component } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import ViewController from "react-navigation";
import SubjectList from "../containers/SubjectList";
class HomeScreen extends Component {
  state = {
    subjects: [
      {
        name: "Математика",
        image: require("../../ui/assets/img/subIcons/math.png"),
        tests: [
          {
            name: "ЗНО онлайн 2019 року з математики – основна сесія",
            questions: [
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/1.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/2.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/3.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/4.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/5.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/6.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/7.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/8.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/9.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              },
              {
                type: "choices",
                question: "",
                image: require("../../ui/assets/img/tests/math/2019-zno/10.png"),
                choices: ["А", "Б", "В", "Г", "Д"],
                answer: "А",
                value: 1
              }
            ]
          },
          {
            name: "Тест з математики зно 2018-2019",
            questions: [
              {
                type: "choices",
                question: "Скільки буде 51231+5",
                image: require("../../ui/assets/img/uncheckedBox.png"),
                choices: ["A", "Б", "В", "Г", "Д"],
                answer: "А"
              },
              {
                type: "answer",
                question: "Скільки буде 15/512",
                image: require("../../ui/assets/img/uncheckedBox.png"),
                answer: "Б"
              }
            ]
          }
        ]
      },
      {
        name: "Українська мова",
        image: require("../assets/img/subIcons/ua.png")
      },
      {
        name: "Англійська мова",
        image: require("../assets/img/subIcons/eng.png")
      }
    ]
  };
  static navigationOptions = {
    title: "Обери предмет",
    headerStyle: {
      // backgroundColor: '#f4511e',
      // backgroundColor: '#f7f7f7',

      marginTop: 25,
      borderBottom: "none",
      shadowColor: "transperent",
      shadowRadius: 0,
      shadowOffset: {
        height: 0
      }
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 30,
      paddingBottom: 10,
      textAlign: "left",
      flex: 1
    }
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <Text style={styles.h1}>Предмети</Text> */}
        <SubjectList
          subjects={this.state.subjects}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingTop: 50,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f7f7f7"
  },
  h1: {
    fontSize: 40,
    // marginBottom: 20,
    fontWeight: "700",
    textAlign: "left",
    width: "100%"
  }
});

export default HomeScreen;
