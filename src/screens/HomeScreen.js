import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to ListScreen"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to ImageScreen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to CounterScreen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to CounterScreen2"
        onPress={() => navigation.navigate("Counter2")}
      />
      <Button
        title="Go to Colors"
        onPress={() => navigation.navigate("Colors")}
      />
      <Button
        title="Go to Square"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Square2"
        onPress={() => navigation.navigate("Square2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
