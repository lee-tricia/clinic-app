import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function patientProfile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
}

function ProfilePage({ navigation }) {

  const [userid, setUserId] = useState("01");
  const [name, setName] = useState("Bob");
  const [number, setNumber] = useState("9111 1111");
  const [email, setEmail] = useState("bob123@gmail.com");
  const [allergies, setAllergies] = useState([]);

  const [clinic, setClinic] = useState("Clinic A");
  const [slot, setSlot] = useState("15 June 2021, 5:30PM");

  function cancelAppointment() {
    // delete from db
    setClinic("-");
    setSlot("-");
  }

  return (
    <View style={styles.container}>

      <View style={styles.profileCard}>
        <Text style={{ color: "gray", padding: 2 }}>{userid}</Text>
        <Text style={[styles.profileCardText, {fontWeight: "bold"}]}>Hello, {name}!</Text>
        <Text style={styles.profileCardText}>Contact Number: {number}</Text>
        <Text style={styles.profileCardText}>Email: {email}</Text>
        <Text style={styles.profileCardText}>Allergies: {allergies}</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonPW]}
          onPress={() => { navigation.navigate("Settings"); }}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.appointment}>
        <Text style={styles.label}>Your Appointment</Text>
        <Text style={styles.appointmentText}>Clinic: {clinic}</Text>
        <Text style={styles.appointmentText}>DateTime: {slot}</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonBook]}
          onPress={() => { cancelAppointment() }}>
          <Text style={styles.buttonText}>Cancel Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#d13056',
    backgroundColor: '#7844c2',
  },
  // profile card
  profileCard: {
    width: "70%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 30,
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 50,
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileCardText: {
    paddingVertical: 6,
    fontSize: 16,
  },
  // appoinment
  appointment: {
    backgroundColor: "white",
    borderRadius: 60,
    height: 1000,
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
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 20,
    marginLeft: 30,
    marginTop: 30,
  },
  appointmentText: {
    paddingVertical: 6,
    fontSize: 20,
    marginLeft: 30,
  },
  // buttons
  button: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  buttonPW: {
    width: 200,
    marginTop: 20,
    backgroundColor: "#212121",
  },
  buttonBook: {
    width: 250,
    marginTop: 20,
    //backgroundColor: "#d6223a",
    backgroundColor: "#41009c",
    marginLeft: 30,
  },
});