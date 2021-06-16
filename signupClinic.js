import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function signupClinic({ navigation, route }) {

  const [userType, setUserType] = useState('clinic');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [officeNum, setOfficeNum] = useState("");
  const [address, setAddress] = useState("");

  function login() {
    navigation.navigate("LoginStack");
  }


  function signup() {
    if (email === "" || password === "" || password2 === "" || officeNum === "" || address === "") {
      alert('Please enter all required fields *');
    } else if (password != password2) {
      alert('Please ensure that your confirmed password is correct ');
    } else {
      navigation.navigate("LoginStack");
    }
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
                onPress={() => navigation.navigate("signupPatient")}
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
            <Text style={styles.label}>Email Address
              <Text style={{color: "red"}}> * </Text> 
            </Text>
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
            <Text style={styles.label}>Password
              <Text style={{color: "red"}}> * </Text> 
            </Text>
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
            <Text style={styles.label}>Confirm Password
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <TextInput
              returnKeyType="next"
              value={password2}
              onChangeText={(text) => setPassword2(text)}
              placeholder="Re-Enter your Password"
              style={styles.textinput}
              secureTextEntry
            />
          </View>

          <View style={{zIndex: 100, }}>
            <Text style={styles.label}>Office Number
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <TextInput
              returnKeyType="next"
              value={officeNum}
              onChangeText={(text) => setOfficeNum(text)}
              placeholder="Enter your Office Number"
              style={[styles.textinput, { width: 200, }]}
              keyboardType={'phone-pad'}
              maxLength = {8}
            />
          </View>


          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Clinic Address
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <TextInput
              returnKeyType="next"
              value={address}
              onChangeText={(text) => setAddress(text)}
              placeholder="Enter your Address"
              style={[styles.textinput, {height: 100, }]}
              multiline={true}
            />
          </View>


          <TouchableOpacity onPress={() => signup() } style={styles.SignUpButton}>
            <Text style={{color: "white", fontWeight:"bold"}}>Sign Up</Text>
          </TouchableOpacity>

          <Text> Already have an account? </Text>
          <TouchableOpacity onPress={() => login() } >
            <Text style={{textDecorationLine: 'underline'}}>Log In here!</Text>
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