import React, { Component } from 'react'
import { StackNavigator, TabNavigator, TabBarBottom, Image } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Images } from '../Themes'
import ScheduleScreen from '../Containers/Schedules/ScheduleScreen'
import TalkDetailScreen from '../Containers/TalkDetailScreen'
import BreakDetailScreen from '../Containers/BreakDetailScreen'
import LocationScreen from '../Containers/LocationScreen'
import AboutScreen from '../Containers/AboutScreen'
import styles from './Styles/NavigationStyles'

import ClientsStack from './Stacks/ClientsStack'
import ReportsStack from './Stacks/ReportsStack'
import MoreStack from './Stacks/MoreStack'
import SignInScreen from '../Containers/Login'

const ScheduleStack = StackNavigator({
  // SignIn: { screen: SignInScreen },
  Home: { screen: ScheduleScreen },
  TalkDetail: { screen: TalkDetailScreen },
  BreakDetail: { screen: BreakDetailScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'Home',
  cardStyle: styles.card
})

const TabNav = TabNavigator({
  Schedule: { screen: ScheduleStack },
  // Location: { screen: LocationScreen },
  // About: { screen: AboutScreen },
  Clients: { screen: ClientsStack },
  Reports: { screen: ReportsStack },
  More: { screen: MoreStack }

}, {
  key: 'Schedule',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  headerMode: 'none',
  initialRouteName: 'Schedule',
  tabBarOptions: {
    style: styles.tabBar,
    labelStyle: styles.tabBarLabel,
    activeTintColor: 'white',
    inactiveTintColor: 'white'
  },
  navigationOptions: ({ navigation }) => ({
      /*
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
          let img;
          if (routeName === 'Schedule') {
            img = focused ? Images.activeInfoIcon : Images.inactiveInfoIcon;
          } else if (routeName === 'Clients') {
            img = focused ? Images.activeInfoIcon : Images.inactiveInfoIcon;
          } else if (routeName === 'Reports') {
            img = focused ? Images.activeInfoIcon : Images.inactiveInfoIcon;
          } else if (routeName === 'More') {
            img = focused ? Images.activeInfoIcon : Images.inactiveInfoIcon;
          }

          return <Image source={img} />;

        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'Clients') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Reports') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'More') {
          iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }, */
  })
})

const AppNavigation = StackNavigator({
  SignIn: { screen: SignInScreen },
  AppStack: { screen: TabNav }
}, {
  headerMode: 'none',
  initialRouteName: 'SignIn',
  cardStyle: styles.card
})

export default AppNavigation // TabNav
