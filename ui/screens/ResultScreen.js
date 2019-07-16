import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import Lightbox from "react-native-lightbox";
class ResultScreen extends Component {
  static navigationOptions = {
    title: "Результати",
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
    },
    headerLeft: null
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.navigation.getParam("score") >
        this.props.navigation.getParam("enterMark") ? (
          <Text>Склав</Text>
        ) : (
          <Text
            style={{
              fontSize: 20,
              color: "red",
              fontWeight: "500",
              marginBottom: 10
            }}
          >
            Не склав
          </Text>
        )}
        <View>
          <Text style={{ fontSize: 25, fontWeight: "700" }}>
            Рейтинговий бал:
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "700", color: "red" }}>
            {this.props.navigation.score} 199 / 200
          </Text>
        </View>
        <View style={styles.bordBot} />
        {this.props.navigation.getParam("questions").map((item, index) => {
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
                source={item.image}
                style={styles.imageQuestion}
                resizeMode={"center"}
                resizeMethod={"resize"}
                width={"100%"}
              />
            </ScrollView>
          );

          calculateQuestionMark = (question, index) =>{
            let i = question.id;
            var val = 0;
            let answers = this.props.navigation.getParam("answers");
            if(question.type !== "mchoices"){
              if(question.answer == answers[index]){
              return question.value;
              }
            }
            else{
              let val = 0;
              for(var j = 0; j< answers[index].length; j++){
                if(question.answer[j] == answers[index][j]){
                  val+=1;
                }
              }
              return val;
            }
            return "0";
          }
          return (
            <View key={index}>
              <View>
                <Text style={{fontWeight: "500", fontSize: 16}}>
                  Завдання {index+1} - {calculateQuestionMark(item, index)}{" "}
                  балів
                </Text>
                <Text>
                  Правильна відповідь: {item.answer} {"\n"}
                  Ваша відповідь: {this.props.navigation.getParam("answers")[index-0] ? this.props.navigation.getParam("answers")[index] : "Не обрано"}
                </Text>
              </View>
              <Lightbox
                swipeToDissmis
                swipeToDismiss={false}
                renderContent={LightImage}
              >
                <Image
                  source={item.image}
                  style={styles.imageQuestion}
                  resizeMode={"contain"}
                  resizeMethod={"resize"}
                  width={"100%"}
                  height={90}
                  marginTop={15}
                />
              </Lightbox>
              <View style={styles.bordBot} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingTop: 50,
    flex: 1,
    flexDirection: "column"
  },
  h1: {
    fontSize: 40,
    // marginBottom: 20,
    fontWeight: "700",
    textAlign: "left",
    width: "100%"
  },
  bordBot: {
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 30
  },
  imageQuestion: {
    display: "flex",
    width: win.width
  }
});

export default ResultScreen;
