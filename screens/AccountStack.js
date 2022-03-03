import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./AccountScreen";
import CameraScreen from './CameraScreen';
import { lightStyles } from '../styles/commonStyles';

const Stack = createStackNavigator();

export default function AccountStack() {

  const styles = lightStyles

  return (
  <Stack.Navigator>
    <Stack.Screen component={AccountScreen} name="Account" options={{
        title: "Your Account",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle
      }} />
      <Stack.Screen component={CameraScreen} name="Camera" options={{
        title: "Take a photo",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: styles.headerTint
      }}/>
  </Stack.Navigator>
  )
}
