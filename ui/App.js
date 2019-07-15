import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SubjectDetailScreen from "./screens/SubjectDetailScreen";
import SubjectTestScreen from "./screens/SubjectTestScreen";
import ResultScreen from "./screens/ResultScreen";
const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  SubjectDetail: {
    screen: SubjectDetailScreen
  },
  SubjectTest: {
    screen: SubjectTestScreen
  },
  ResultScreen: {
    screen: ResultScreen
  }
  // Subject: { screen: ProfileScreen },
});
const App = createAppContainer(MainNavigator);
export default App;
