import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import LoadingScreen from '../Containers/AuthLoadingScreen'
import LoggedInStackNavigator from './LoggedInStackNavigator'
import NotLoggedInStackNavigator from './NotLoggedInStackNavigator'

import styles from './Styles/NavigationStyles'

export const AppNavigation = StackNavigator({
  AuthLoading: { screen: LoadingScreen },
  App: { screen: LoggedInStackNavigator },
  Auth: { screen: NotLoggedInStackNavigator }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: styles.header
  }
})

