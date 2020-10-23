import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MyHeader from './component/MyHeader';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {AppTabNavigator} from './component/AppTabNavigator';
import { AppDrawerNavigator } from './component/AppDrawerNavigator';

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  HomeScreen:{screen: HomeScreen},
  Drawer: { screen: AppDrawerNavigator },
  Tabs: { screen: AppTabNavigator },
 
})

const AppContainer =  createAppContainer(switchNavigator);

