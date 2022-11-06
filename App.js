import React, { Component } from 'react';
import { Alert, Button, TextInput, Text, Image, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials are valid');
  }

  render() {
    return (
      
    
      <View style={styles.container}>
         <View style={styles.image}>
        <Image source={require('../helpinghands/assets/logo.png')}></Image>
        </View>
    <Text style={styles.heading}>Helping Hands</Text>
  
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.buttonStyle}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3e0fb',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    width: 196,
    height: 100,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#4a5e74',
  },
  buttonStyle: {
    color: '#4a5e74'
  },
image: {
marginTop: 5,
width: 50,
height: 100,
alignSelf: 'center',

},
  
});
