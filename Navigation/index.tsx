import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";

//Components

//-------//
import { RootStackParamList } from "../types";
import { ColorSchemeName } from "react-native/types";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HeaderComponent from "../Components/Header";

export default function Navigation({
    colorScheme,
}:{
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer theme={colorScheme === "dark"? DarkTheme:DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    )

}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(){
    return (
        <Stack.Navigator
        initialRouteName="Login"
        >
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown:false}}
            />
             <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={()=>({
                headerTitle:() => <HeaderComponent />,
                gestureEnabled:false,
                headerBackVisible:false,
                headerStyle:{backgroundColor:'#41fca3'}
            })}
            
            />
        </Stack.Navigator>
    )
}



