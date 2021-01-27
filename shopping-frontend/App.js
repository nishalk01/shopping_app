import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import { Provider as PaperProvider ,
  
  DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

 
//react navigation imports
import {NavigationContainer,
  DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


//screen imports
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import HomeScreen from './src/screens/HomePage';
import ProfileScreen from './src/screens/Profile';

//component imports
import AppBar from './src/components/AppBar';

import { navigationRef,navigate } from './src/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};



export default function App() {

useEffect(() => {
    if(AsyncStorage.getItem('auth_token')){
      navigate('MainApp',{screen:"Home"});
    }
 
}, [])

const Drawer=createDrawerNavigator();
const Stack=createStackNavigator();

const MainApp=()=>{
  return(
    <View style={{flex:1}}>
    
    <Drawer.Navigator >
   <Drawer.Screen name="Home" component={HomeScreen} />
   <Drawer.Screen name="Notifications" component={ProfileScreen} />
  </Drawer.Navigator>
</View>
  )
 
}

  
  return (
    //TODO add ref navigator
    //TODO implement forgotpassword
    <PaperProvider  theme={CombinedDefaultTheme}>
   <NavigationContainer theme={CombinedDefaultTheme} ref={navigationRef}>
   <Stack.Navigator initialRouteName="Login">
     <Stack.Screen name="Login"  options={{ headerShown:false}} component={LoginScreen}/>
     <Stack.Screen name="Register" options={{ headerShown:false }} component={RegisterScreen}/>
     <Stack.Screen name="ForgotPassword" options={{ headerShown:false }} component={ForgotPasswordScreen}/>
     <Stack.Screen name="MainApp" options={{ headerShown:false }} component={MainApp}/>
   </Stack.Navigator>
   </NavigationContainer>
   </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
