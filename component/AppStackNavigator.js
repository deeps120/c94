import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import StreakScreen from '../screens/StreakScreen';

export const AppStackNavigator = createStackNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  SettingScreen : {
    screen : SettingScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  StreakScreen : {
    screen : StreakScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'HomeScreen'
  }
);
