import { StyleSheet, Text, View,Button } from 'react-native';

const registerStyle = StyleSheet.create({
   containerRegister: {
      width: '100%',
      height: '100%',
      backgroundColor: '#e5fce2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleRegister:{
      fontSize:25,
      fontWeight: 'bold',
      color:'#fff',
      marginTop:30,
    },
    containerInput:{
      width: '90%',
      height: '70%',
      backgroundColor: '#cccccc',
      alignItems: 'center',
      borderRadius:10,
    },
    inputText:{
      height:40,
      width:260,
      fontSize:15,
      fontWeight: 'bold',
      backgroundColor:'#fff',
      borderRadius:5,
      paddingLeft:20,
      paddingHorizontal:12,
      marginTop:15,
      zIndex:1,
      opacity:0.5,
    },
    button: {
      width:"40%",
      height:"10%",
      backgroundColor: '#4CAF50',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      
    },
    text: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
   
  });
  

  export default registerStyle;