import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { WebView } from 'react-native-webview';

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function patientExtra() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Information" component={ExtraPage} /> 
    </Stack.Navigator>
  );
}

function renderLoadingView() {
  return (
      <ActivityIndicator
         color = "black"
         size = "large"
         style = {styles.activityIndicator}
         hidesWhenStopped={true} 
      />
  );
}

function ExtraPage({ navigation }) {
  return (
    <View style={styles.container}>
    <WebView
        source={{uri: 'https://www.gov.sg/article/covid-19-resources'}}
        style={{marginTop: 10}}
        renderLoading={renderLoadingView}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});