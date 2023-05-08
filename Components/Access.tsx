import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';






export default function Access() {
    const [backgroundColor, setBackgroundColor] = useState('#f00'); // estado para armazenar a cor de fundo
const MudarBackGround = ()=>{
    setBackgroundColor(backgroundColor === '#f00' ? '#fff' :'#f00' ); // atualiza a cor de fundo para vermelho
}
   
   useEffect(()=>{
    console.log('Atualizou')
   },[])

 
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text>Tela de Acesso</Text>
        <Button title='aperte Aqui' onPress={()=>{ MudarBackGround()} }></Button>
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
  