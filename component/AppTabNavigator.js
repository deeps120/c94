import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import StreakScreen from '../screens/StreakScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarLabel : "Home",
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions :{
      tabBarLabel : "Settings",
    }
  },
  StreakScreen: {
    screen: StreakScreen,
    navigationOptions :{
      tabBarLabel : "streak",
    }
  }
});
