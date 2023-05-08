import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

export default function Login({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={styles.container}>
      <Text>Minha Tela</Text>
      <Button title='aperte Aqui' onPress={() => navigation.navigate('AccessScreen')}></Button>
      <StatusBar style="auto" />
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
