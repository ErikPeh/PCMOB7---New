import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { lightStyles, commonStyles } from "../styles/commonStyles";

export default function CreateScreen({ navigation }) {

  const styles = {...lightStyles, ...commonStyles}

  return (
    <View style={styles.container}>
      <Text>
        Create Post Screen
      </Text>
    </View>
  )
}

const additionalStyles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
  label: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 5
  }
});