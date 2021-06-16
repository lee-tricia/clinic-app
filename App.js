import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import loginStack from "./loginStack";
import signupPatient from "./signupPatient";
import signupClinic from "./signupClinic";
import patientApp from "./PatientScreens/patientApp"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="SignOut" component={loginStack} />
        <Stack.Screen name="signupPatient" component={signupPatient} />
        <Stack.Screen name="signupClinic" component={signupClinic} />
        <Stack.Screen name="patientApp" component={patientApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}