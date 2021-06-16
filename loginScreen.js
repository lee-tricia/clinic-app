import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function loginScreen({ navigation, route }) {

  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    fetch('https://django-be.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": "test@mail.com",
        "password": "password",
        "userType": "patient"
      })
    }).then((response) => console.log(response.json())
    );
    navigation.navigate("patientApp");
  }

  function signup() {
    navigation.navigate("signupPatient");
  }

  return (

    <View style={styles.container}>

      <TouchableWithoutFeedback onPressOut={Keyboard.dismiss} accessible={false}>

        <View style={styles.formStyle}>

          <View>
            <Image
              style={styles.tinyLogo}
              source={require('./assets/logo.png')}
            />
          </View>

          <View style={{flexDirection:"row",alignItems:'center', marginBottom: 20, marginLeft: 20,}}>
            <View style={{flex:1}}>
              <RadioButton.Android
                value="patient"
                status={ userType === 'patient' ? 'checked' : 'unchecked' }
                onPress={() => setUserType('patient')}
                color={'#4a0f8c'}
                //uncheckedColor={"#5b5b5c"}
              />
            </View>
            <View style={{flex:4}}>
            <Text> Patient </Text>
            </View>
            <View style={{flex:1}}>
              <RadioButton.Android
                value="clinic"
                status={ userType === 'clinic' ? 'checked' : 'unchecked' }
                onPress={() => setUserType('clinic')}
                color={'#4a0f8c'}
              />
            </View>
            <View style={{flex:4}}>
            <Text> Clinic </Text>
            </View>
          </View>

        
        
          
          <View>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              label="Email"
              returnKeyType="next"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Enter your Email Address"
              style={styles.textinput}
            />
          </View>

          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              label="Password"
              returnKeyType="done"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
              style={styles.textinput}
              secureTextEntry
            />
          </View>

          <TouchableOpacity onPress={() => login() } style={styles.logInButton}>
            <Text style={{color: "white", fontWeight:"bold"}}>Log in</Text>
          </TouchableOpacity>

          <Text style={{ marginTop: 30,}}> Do not have an account? </Text>
          <TouchableOpacity onPress={() => signup() } >
            <Text style={{textDecorationLine: 'underline', marginBottom: 60,}}>Sign Up here!</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>

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
  formStyle:{
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    height: "100%",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 30,
  },
  label: {
    marginBottom: 10,
  },
  textinput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    width: 300,
    padding: 12,
    paddingTop: 14,
    marginBottom: 20,
  },
  logInButton: {
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0e8bad",
    color: "white",
    width: 100,
  },
});