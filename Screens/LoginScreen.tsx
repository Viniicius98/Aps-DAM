import { StatusBar } from 'expo-status-bar';
import {  Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import loginStyle from '../styles/loginStyle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export default function LoginScreen() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={loginStyle.containerLogin}>
        <View style={loginStyle.containerInput}>
          <Text style={loginStyle.titleLogin}>Login</Text>
          
           <TextInput style={loginStyle.inputText}
            placeholder="Senha"
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry
          />
          <TextInput style={loginStyle.inputText}
          placeholder="E-mail"
          defaultValue={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          />
        <TouchableOpacity style={loginStyle.button} onPress={(()=>{
          navigation.navigate('Home',{name:'Vinicius',email:email});
        })}>
          <Text style={loginStyle.text}>Entrar</Text>
       </TouchableOpacity>
       <StatusBar style="dark" />
        </View>
        
      </SafeAreaView> 
    );
  
}


