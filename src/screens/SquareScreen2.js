import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 250,
          width: 250,
          backgroundColor: `rgb(${red},${green},${blue})`,
          //align at center
          alignSelf: "center",
        }}
      />
      <Text style={styles.textStyle}>{`rgb(${red},${green},${blue})`}</Text>
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ colorToChange: "red", amount: -1 * red });
          dispatch({ colorToChange: "green", amount: -1 * green });
          dispatch({ colorToChange: "blue", amount: -1 * blue });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default SquareScreen;
