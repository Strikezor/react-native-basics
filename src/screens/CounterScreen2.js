import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const AMOUNT = 100;

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increase' || 'decrease', payload: 1 }

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen2 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

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
        Current Count:{count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen2;
