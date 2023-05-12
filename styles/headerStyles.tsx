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
        marginTop:2,
        marginLeft:50,
        

      },
  });
  

  export default headerStyle;