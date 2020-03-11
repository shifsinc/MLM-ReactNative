import React, { Fragment } from 'react';
import LoginController from './LoginController';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
// import { createStackNavigator, createAppContainer } from "react-navigation-stack";


// const App = () => {
//   return (
//     <LoginController />

//   );
// };
export default class App extends React.Component {
  render() {
    return (
      <LoginController navigation={this.props.navigation} />

    );
  }
}
// export default function App() {
//   return (
//     <LoginController />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: AboutScreen
//   }
// });

const AppNavigator = createStackNavigator({
  home: { screen: Home },
});

const AppContainer = createAppContainer(AppNavigator);

