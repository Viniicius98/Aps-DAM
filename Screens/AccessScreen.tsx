import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import Access from '../Components/Access';



export default function AccessScreen() {
  return (
    <View style={styles.container}>
     <Access />
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
