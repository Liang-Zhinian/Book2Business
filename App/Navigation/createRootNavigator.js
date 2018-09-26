import React from 'react'
import {
    AsyncStorage,
    View,
    StyleSheet,
    Button
  } from 'react-native'
import {
    StackNavigator
} from 'react-navigation'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.
// import AppStack from './AppNavigation'
import AuthLoadingScreen from '../Containers/AuthLoadingScreen'
import SignInScreen from '../Containers/Login'

const styles = StyleSheet.create({
  container: {flex: 1}
})

// class SignInScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Please sign in',
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Button title="Sign in!" onPress={this._signInAsync} />
//             </View>
//         );
//     }

//     _signInAsync = async () => {
//         await AsyncStorage.setItem('userToken', 'abc');
//         this.props.navigation.navigate('App');
//     };
// }

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!'
  };

  render () {
    return (
      <View style={styles.container}>
        <Button title='Show me more of the app' onPress={this._showMoreApp} />
        <Button title='Actually, sign me out :)' onPress={this._signOutAsync} />
      </View>
    )
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other')
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  };
}

const AppStack = StackNavigator({ Home: HomeScreen })
const AuthStack = StackNavigator({ SignIn: SignInScreen })

const SignedOut = StackNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack
}, {
  headerMode: 'none',
  initialRouteName: 'AuthLoading'
})

const SignedIn = StackNavigator(
  {
    App: AppStack
  }, {
    mode: 'card',
    headerMode: 'none'
  }
)

export default createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      mode: 'modal',
      headerMode: 'none',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
    }
    )
}
