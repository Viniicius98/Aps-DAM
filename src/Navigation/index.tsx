import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import "react-native-reanimated";
import { enableScreens } from "react-native-screens";

// Screens
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InitialScreen from "../screens/InitialScreen";
import AboutScreen from "../screens/AboutScreen";

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
enableScreens();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Initial">
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent title="Inicio" />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
        })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent title="Cadastrar" />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
          cardStyle: { backgroundColor: "white" },
        })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent title="Login" />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
          cardStyle: { backgroundColor: "white" },
          // Estilo de transição horizontal
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent title="Home" />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
          cardStyle: { backgroundColor: "white" },
          // Estilo de transição horizontal
        })}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={() => ({
          headerTitle: () => <HeaderComponent title="Sobre" />,
          gestureEnabled: false,
          headerBackVisible: false,
          headerStyle: { backgroundColor: "#336699" },
        })}
      />
    </Stack.Navigator>
  );
}
