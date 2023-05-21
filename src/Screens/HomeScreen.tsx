import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  ImageProps,
  Image,
  SafeAreaView,
} from "react-native";
import "react-native-gesture-handler";
import homeStyle from "../../styles/homeStyles";
import { Link } from "@react-navigation/native";
import { GestureResponderEvent } from "react-native";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import Perfil from "../components/Perfil";

const FlatLinks = [
  {
    id: "0",
    text: "Exercícios",
    icon: require("../../assets/images/exercise.png"),
    screen: "Exercice",
  },
  {
    id: "1",
    text: "Dicas",
    icon: require("../../assets/images/bicycle.png"),
    screen: "Tips",
  },
  {
    id: "2",
    text: "Videos",
    icon: require("../../assets/images/play.png"),
    screen: "Login",
  },
  {
    id: "3",
    text: "Sobre",
    icon: require("../../assets/images/about.png"),
    screen: "About",
  },
];

interface IFlatItems {
  id: string;
  text: string;
  icon: ImageProps["source"];
  screen: any;
}

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

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const route = useRoute();
  const params =
    (route.params as {
      name: string;
      email: string;
      age: string;
      weight: string;
      height: string;
    }) || {};

  const { name, email, age, weight, height } = params;

  const renderItem = ({ item }: { item: IFlatItems }) => {
    return <Item item={item} onPress={() => setSelectedId(Number(item.id))} />;
  };
  return (
    <SafeAreaView style={homeStyle.homeContainer}>
      <Image
        style={homeStyle.background}
        source={require("../../assets/images/background.jpg")}
      />
      <Perfil name={name} idade={age} peso={weight} altura={height} />
      <View style={homeStyle.itemsContainer}>
        <FlatList
          data={FlatLinks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        ></FlatList>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
