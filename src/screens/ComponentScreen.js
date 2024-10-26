import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Akshay";
  return (
    <View>
      <Text style={styles.headingStyle}>Getting started with React Native</Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  headingStyle: {
    fontSize: 45,
  },
});

export default ComponentScreen;
