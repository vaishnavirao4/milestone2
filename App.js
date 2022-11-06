import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
export default function App() {
   return(
    <View style={styles.container}>
<Text style={styles.text1}>Welcome!</Text>
<Button
          title={'Log out'}
          style={styles.buttonStyle} 
          />
</View>


   )
  };
  const styles = StyleSheet.create({
    container: {
    
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3e0fb',
    },

  text1: {
  marginTop: 200,
  marginLeft: 10,
   
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4a5e74',
  },

  buttonStyle: {
  marginTop: 200,
  marginLeft:60,
  },
});