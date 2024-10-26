import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const AMOUNT = 100;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: AMOUNT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: AMOUNT })}
      />
      <Text style={{ textAlign: "center", fontSize: 40 }}>
        Current Count:{counter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen2;
