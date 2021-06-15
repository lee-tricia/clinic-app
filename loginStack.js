import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import loginScreen from "./loginScreen";

const InnerStack = createStackNavigator();

export default function loginStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="LoginStack"
        component={loginScreen}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: "white",
            height: 100,
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
          headerTintColor: "#f55",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      />
    </InnerStack.Navigator>
  );
}