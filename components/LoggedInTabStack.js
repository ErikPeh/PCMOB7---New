import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BlogStack from "../components/BlogStack";
import AccountStack from "../components/AccountStack";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

export default function LoggedInStack() {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
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
          return <FontAwesome name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: isDark ? "#181818" : "white",
          },
          null,
        ],
        headerShown: false,
      })}
    >
      <Tab.Screen name="Blog" component={BlogStack} />
      <Tab.Screen name="Settings" component={AccountStack} />
    </Tab.Navigator>
  );
}
