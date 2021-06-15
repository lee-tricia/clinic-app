import React, { useState } from "react";
import { 
  View, 
  Text, 
  DatePickerIOS, 
  TouchableWithoutFeedback, 
  Keyboard, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  LogBox 
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from "react-native-vector-icons/Ionicons";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function patientBook() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Book Appointment" component={patientBookPage} /> 
    </Stack.Navigator>
  );
}
LogBox.ignoreAllLogs();

function patientBookPage({ navigation }) {

  // get data from db and insert here as var
  var clinicOptions = [
    { label: "Clinic A", value: "Clinic A" },
    { label: "Clinic B", value: "Clinic B" },
    { label: "Clinic C", value: "Clinic C" }
  ]

  var timingOptions = [
    { label: "11.00PM", value: "2300" },
    { label: "11.30PM", value: "2330" },
  ]

  // to input these fields into db
  const [selectedClinic, setClinicValue] = useState(null);
  const [selectedDate, setDateValue] = useState(new Date());
  const [selectedTime, setTimeValue] = useState(null);
  const [text, setText] = useState(null);

  // functions
  function toValidate() {
    if (selectedClinic === null && selectedTime === null) {
      alert('Please select your preferred clinic and timing. ');
    } else if (selectedClinic === null) {
      alert('Please select your preferred clinic. ');
    } else if (selectedTime === null) {
      alert('Please select your preferred timing. ');
    } else {
      navigation.navigate("Profile");
    }
  }

  // page
  return (
    <View style={styles.container}>

      <TouchableWithoutFeedback onPressOut={Keyboard.dismiss} accessible={false}>
        <View style={styles.formStyle}>

          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Select your preferred Clinic
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <View style={styles.card}>
              <RNPickerSelect
                placeholder={{ label: "List of Clinics", value: null }}
                Icon={() => {
                  return <Ionicons family={"Ionicons"} name={"caret-down-outline"} size={15}  />;
                }}
                onValueChange={(value) => setClinicValue(value) }
                items={clinicOptions}
              />
            </View>
          </View>

          <View>
            <Text style={[styles.label, {marginLeft: "-38%"}]}>Select your preferred Date 
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <View style={{margin: -95, marginLeft: "-38%"}}>
              <DatePickerIOS
                date={selectedDate}
                mode="date"
                initialDate={new Date()}
                minimumDate={new Date()}
                onDateChange={(date) => {
                  setDateValue(date);
                }}
              />
            </View>
          </View>

          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Select your preferred Timing
              <Text style={{color: "red"}}> * </Text> 
            </Text>
            <View style={styles.card}>
              <RNPickerSelect
                placeholder={{ label: "List of Timings Available", value: null }}
                Icon={() => {
                  return <Ionicons family={"Ionicons"} name={"caret-down-outline"} size={15}  />;
                }}
                onValueChange={(value) => setTimeValue(value)}
                items={timingOptions}
              />
            </View>
          </View>
          
          <View style={{zIndex: 100}}>
            <Text style={styles.label}>Reason / Symptoms</Text>
            <TextInput
              style={styles.textinput}
              onChangeText={(newText) => setText(newText)}
              value={text}
              placeholder="Enter your reason for booking this medical appointment and/or any symptoms you have"
              multiline={true}
            />
          </View>
          

          <TouchableOpacity 
            style={[styles.button, {zIndex: 100}]} 
            onPress={() => toValidate()}
          >
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0eada8",
  },
  formStyle:{
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    marginTop: 30,
    marginBottom: 10,
  },
  card:{
    borderWidth: 1,
    width: 300,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 12,
    color: 'black',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  textinput: {
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    padding: 12,
    paddingTop: 14,
  },
  button: {
    padding: 10,
    margin: 20,
    backgroundColor: "#0e8bad",
    borderRadius: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});