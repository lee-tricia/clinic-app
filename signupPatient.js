import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function signupPatient({ navigation, route }) {

  const [userType, setUserType] = useState('patient');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [contactNum, setContactNum] = useState("")

  function login() {
    navigation.navigate("LoginStack");
  }

  function signup() {
    navigation.navigate("LoginStack");
  }

  return (

    <View style={styles.container}>

      <TouchableWithoutFeedback onPressOut={Keyboard.dismiss} accessible={false}>
        <View style={styles.formStyle}>

          <View style={{flexDirection:"row",alignItems:'center', marginBottom: 30}}>
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

        
        
          
          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
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

          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              returnKeyType="next"
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter your Password"
              style={styles.textinput}
              secureTextEntry
            />
          </View>

          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              returnKeyType="next"
              value={password2}
              onChangeText={(text) => setPassword2(text)}
              placeholder="Re-Enter your Password"
              style={styles.textinput}
              secureTextEntry
            />
          </View>

          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              returnKeyType="next"
              value={contactNum}
              onChangeText={(text) => setContactNum(text)}
              placeholder="Enter your Contact Number"
              style={styles.textinput}
              keyboardType={'phone-pad'}
              maxLength = {8}
            />
          </View>

          <TouchableOpacity onPress={() => signup() } style={styles.SignUpButton}>
            <Text style={{color: "white", fontWeight:"bold"}}>Sign Up</Text>
          </TouchableOpacity>

          <Text> Already have an account? </Text>
          <TouchableOpacity onPress={() => login() } >
            <Text style={{textDecorationLine: 'underline'}}>Log in here!</Text>
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
  label: {
    marginBottom: 10,
  },
  textinput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    padding: 12,
    paddingTop: 14,
    marginBottom: 20,
  },
  SignUpButton: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0e8bad",
    color: "white",
    width: 100,
  },
});