import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API, API_POSTS } from "../constants/API";
import { lightStyles } from "../styles/commonStyles";

export default function IndexScreen({ navigation, route }) {

  const [posts, setPosts] = useState([]);
  const styles = lightStyles;

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addPost}>
          <FontAwesome name="plus" size={24} style={{ color: styles.headerTint, marginRight: 15 }} />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(API + API_POSTS, {
        headers: { Authorization: `JWT ${token}` },
      })
      console.log(response.data);
      setPosts(response.data);
      return "completed"
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.error = "Invalid token") {
        navigation.navigate("SignInSignUp");
      }
    }
  }

  function addPost() {
    
  }

  function deletePost() {
    
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details", {post: item})}>
        <View
          style={{
            padding: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Text style={styles.text}>{item.title}</Text>
          <TouchableOpacity onPress={deletePost}>
            <FontAwesome name="trash" size={20} color="#a80000" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

