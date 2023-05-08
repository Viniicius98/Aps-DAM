import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import Access from './Components/Access';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="AccessScreen" component={Access} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
