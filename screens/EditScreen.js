import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles, lightStyles } from "../styles/commonStyles";

export default function EditScreen({ navigation }) {

  const styles = { ...lightStyles, ...commonStyles }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title, {marginTop: 20}]}>Edit Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
