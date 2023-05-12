import { StyleSheet, Text, View,Button } from 'react-native';

const homeStyle = StyleSheet.create({
    homeContainer:{
       width:'100%',
       height:'100%',
       backgroundColor:'#e6e9ed',
       justifyContent: 'center',
    },
    itemsContainer:{
        width:'100%',
        height:'40%',
        marginBottom: 0,
    },
    items: {
        width: '100%',
        height: 90,
        marginLeft: 4,
        paddingLeft: 8,
        backgroundColor: "#a5c4e0",
        borderBottomColor: "#000",
        borderBottomWidth: 8,
      },
      text: {
       fontSize:25,
       fontWeight: 'bold',
       color:'#000',
      },
      image: {
        width: 50,
        height: 50,
        marginTop: 0,
       },
    
  });
  

  export default homeStyle;