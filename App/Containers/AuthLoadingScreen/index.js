import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Image
} from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    const that = this
    setTimeout(() => {
      that._resetRouteStack(userToken ? 'App' : 'Auth')
    }, 2000)
    
  };

  _resetRouteStack = (routeName) => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    }))
  }

  // Render any loading content that you like here
  render () {
    return (
      <View style={styles.container}>
        <Image source={require('./images/background.jpg')} />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})
