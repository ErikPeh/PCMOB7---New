
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, UIManager, ActivityIndicator, Keyboard } from 'react-native';
import { API, API_LOGIN } from '../constants/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
} //Needs to be manually enabled for android

export default function SignInSignUpScreen({ navigation }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')

  async function login() {
    console.log("---- Login time ----");
    Keyboard.dismiss();

    try {
      setLoading(true);
      const response = await axios.post(API + API_LOGIN, {
        username,
        password,
      });
      console.log("Success logging in!");
      // console.log(response);
      await AsyncStorage.setItem("token", response.data.access_token);
      setLoading(false);
      setUsername("");
      setPassword("");
      navigation.navigate("Logged In");
    } catch (error) {
      setLoading(false);
      console.log("Error logging in!");
      console.log(error);
      setErrorText(error.response.data.description);
      if (error.response.status = 404) {
        setErrorText("User does not exist")
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Log In
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Username:"
          placeholderTextColor="#003f5c"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
      </View>
  
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password:"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(pw) => setPassword(pw)}
        />
      </View>
      <View/>
      <View>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>
          {loading ? <ActivityIndicator style={{ marginLeft: 10 }}/> : <View/>}
        </View>
      </View>
      <Text style={styles.errorText}>
        {errorText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40, 
    margin: 20
  },
  switchText: {
    fontWeight: '400',
    fontSize: 20, 
    marginTop: 20
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 20, 
    margin: 20,
    color: 'white'
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    marginTop: 20
  }
});
