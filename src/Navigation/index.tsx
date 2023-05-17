import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

// Screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InitialScreen from "../screens/InitialScreen";

//Components
import HeaderComponent from "../components/Header";
//-------//
import { RootStackParamList } from "../../types";
import { ColorSchemeName } from "react-native/types";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
        })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
        })}
      />
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={() => ({
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
        })}
      />
    </Stack.Navigator>
  );
}
