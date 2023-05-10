import { StyleSheet, Text, View,Button } from 'react-native';

const headerStyle = StyleSheet.create({
    headerContainer:{
       width:410,
       backgroundColor:'#41fca3',
       flexDirection: 'row',
       
    },
    image:{
        width: 70,
        height: 72,
        marginTop: 5,
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',
        color:'#fff',
        padding:25,

      },
  });
  

  export default headerStyle;