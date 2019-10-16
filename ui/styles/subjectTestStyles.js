import {StyleSheet, Dimensions} from 'react-native';

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
  export default styles;