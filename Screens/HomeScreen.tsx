import { StatusBar } from 'expo-status-bar';
import { Text, View,Button, FlatList, ImageProps, Image } from 'react-native';
import 'react-native-gesture-handler';
import homeStyle from '../styles/homeStyles';
import { Link } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';
import { useState } from 'react';
import Perfil from '../Components/Perfil';


const FlatLinks = [
  {
    id:"0",
    text:"Exercícios",
    icon: require('../assets/images/exercise.png'),
    screen:"ExerciceScreen",
  },
  {
    id:"1",
    text:"Dicas",
    icon: require('../assets/images/bicycle.png'),
    screen:"TipsScreen",
  },
  {
    id:"2",
    text:"Sobre",
    icon: require('../assets/images/about.png'),
    screen:"LoginScreen",
  }
];

interface IFlatItems {
  id:string;
  text:string;
  icon:ImageProps['source'];
  screen:any;
};

const Item = ({
  //refatorar a const Item Link to modificando css da ImageFlat
  item,
  onPress,
}: {
  item: IFlatItems;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <Link style={homeStyle.items} to={{ screen: item.screen }}>
    <Image style={homeStyle.image} source={item.icon} />
    <Text style={homeStyle.text}> {item.text}</Text>
  </Link>
);


export default function HomeScreen({route}:any) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const renderItem = ({ item }: { item: IFlatItems }) => {
    return <Item item={item} onPress={() => setSelectedId(Number(item.id))} />;
  }
      return (
        <View style={homeStyle.homeContainer}>
          <Perfil />
           <View style={homeStyle.itemsContainer}>
            <FlatList
              data={FlatLinks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            ></FlatList>
          </View>
        </View>
      );
}


