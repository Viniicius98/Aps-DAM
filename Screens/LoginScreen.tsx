import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import Login from "../Components/Login"
import { NavigationProp } from '@react-navigation/native';


type LoginScreenProps = {
  navigation: NavigationProp<any>;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} />
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
