import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';


const Container = styled.View`


`



export default function Login({navigation}:any) {
  return (
    <View>
      <Text>Minha Tela</Text>
      <Button title='aperte Aqui'/>
      <StatusBar style="auto" />
    </View>
  );
}
