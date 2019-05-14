import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SubjectTest from '../components/SubjectTest'
export class SubjectTestScreen extends Component {
    state = {
        name: this.props.navigation.getParam('name', "Тест"),
        questions: this.props.navigation.getParam('questions', [])

    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SubjectTest navigation={this.props.navigation} name={this.state.name} questions={this.state.questions} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 25
    },
})


export default SubjectTestScreen
