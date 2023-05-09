import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import Login from "../Components/Login"
import { NavigationProp } from '@react-navigation/native';




export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Login  />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
