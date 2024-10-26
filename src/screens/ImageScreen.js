import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore="9"
      />
      <ImageDetails
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore="7"
      />
      <ImageDetails
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore="10"
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
