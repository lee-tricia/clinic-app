import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import Profile from "./patientProfile";
import Book from "./patientBook";
import Extra from "./patientExtra";

const Tab = createBottomTabNavigator();

export default function patientApp() {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Book Appointment") {
              iconName = focused ? "calendar" : "calendar-sharp";
            } else if (route.name === "Information") {
              iconName = focused ? "information-circle-sharp" : "information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#36bfbb", 
          inactiveTintColor: "#8f8f8f", 
        }}
      >

        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Book Appointment" component={Book} />
        <Tab.Screen name="Information" component={Extra} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}