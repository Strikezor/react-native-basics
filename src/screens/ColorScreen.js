import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  let [colors, setColors] = useState([]);
  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      {/* <View style={{ height: 100, width: 100, backgroundColor: randomRGB() }} /> */}

      <FlatList
        contentContainerStyle={styles.colorList}
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  colorList: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default ColorScreen;
