import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import 'react-native-gesture-handler';
import React, { useState } from 'react';



export default function AccessScreen({route}:any) {
      return (
        <View style={[styles.container]}>
          <Text> {route.params.name}</Text>
          <Text> {route.params.email}</Text>
          <Button title='aperte Aqui' ></Button>
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
