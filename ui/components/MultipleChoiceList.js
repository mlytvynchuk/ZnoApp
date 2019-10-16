import React from 'react'
import {View, TextInput, Text} from 'react-native'
import styles from '../styles/subjectTestStyles'
export default function MultipleChoiceList({currentQuestion,currentQuestionIndex, answers, handleAnswerInput}){
  const brBlock = index => {
    if (index > 1 && index % 2 == 0) {
      return <Text>{"\n"}</Text>;
    }
  };  
  return(
        <View>
      <View style={styles.choicesBoxContainer}>
        {currentQuestion.choices &&
          currentQuestion.choices.map((item, index) => (
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
                    answers[currentQuestionIndex][index] &&
                    String(answers[currentQuestionIndex][index])
                  }
                />
              </View>
              {brBlock(index + 1)}
            </View>
          ))}
      </View>
    </View>
    )
}