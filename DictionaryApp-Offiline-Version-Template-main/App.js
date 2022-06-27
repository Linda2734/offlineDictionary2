import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import dictionary from './database';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />

        

    if("word"!==dictionary){
      <Text>Sorry this word is not availble</Text>
}
      </View>
    )
  }
}
