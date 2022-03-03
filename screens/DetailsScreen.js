import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { commonStyles, lightStyles } from "../styles/commonStyles";

export default function ShowScreen({ navigation, route }) {

  const [post, setPost] = useState(route.params.post);
  const styles = {...lightStyles, ...commonStyles};

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={editPost} style={{marginRight: 10}}>
          <FontAwesome name="pencil-square-o" size={30} color={styles.headerTint} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    console.log(route.params.post)
  }, [])

  function editPost() {
    navigation.navigate("Edit")
  }
  
  return (
    <View style={styles.container}>
      <Text>
        Details Screen
      </Text>
    </View>
  );
}
