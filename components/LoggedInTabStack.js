import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogStack from "../components/BlogStack";
import AccountStack from "../components/AccountStack";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Blog") {
            iconName = "comments";
          } else if (route.name === "Settings") {
            iconName = "cog";
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name="Blog" component={BlogStack} />
      <Tab.Screen name="Settings" component={AccountStack} />
    </Tab.Navigator>
  );
}
