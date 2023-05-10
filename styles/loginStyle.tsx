import { StyleSheet, Text, View,Button } from 'react-native';

const loginStyle = StyleSheet.create({
    containerLogin: {
      width: '100%',
      height: '100%',
      backgroundColor: '#e5fce2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleLogin:{
      fontSize:25,
      fontWeight: 'bold',
      color:'#fff',
      marginTop:30,
    },
    containerInput:{
      width: '80%',
      height: '40%',
      backgroundColor: '#cccccc',
      alignItems: 'center',
      borderRadius:10,
    },
    inputText:{
      height: 45,
      width:260,
      fontSize:15,
      fontWeight: 'bold',
      backgroundColor:'#fff',
      borderRadius:5,
      paddingLeft:20,
      paddingHorizontal:12,
      marginTop:100,
      marginBottom:-200,
      zIndex:1,
      opacity:0.5,

    },
    button: {
      width:"30%",
      height:"15%",
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginTop:350,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  

  export default loginStyle;