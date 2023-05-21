import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import aboutStyle from "../../styles/aboutStyles";
import { useNavigation } from "@react-navigation/native";

export default function AboutScreen() {
  return (
    <SafeAreaView style={aboutStyle.container}>
      <Text style={aboutStyle.title}>
        Atividade Prática Supervisionada de Desenvolvimento de Aplicações Movéis
      </Text>
      <Text style={aboutStyle.description}>
        Um Aplicativo que vem para facilitar suas atividades físicas
      </Text>
      <Text style={aboutStyle.institution}>Unicarioca - Rio Comprido</Text>
      <Text style={aboutStyle.creator}>Criado por:</Text>
      <Text style={aboutStyle.creator}>
        {" "}
        Douglas Melo da Silva : 2017201446{" "}
      </Text>
      <Text style={aboutStyle.creator}>
        Vinicius de Sousa da Silva : 2019200310
      </Text>
      <Text style={aboutStyle.year}>Ano de Criação: 2023</Text>
      <Text style={aboutStyle.contact}>Contato:</Text>
      <Text style={aboutStyle.contact}>viniciuspa_silva@yahoo.com.br</Text>
      <Text style={aboutStyle.contact}>melosilvadouglas7@gmail.com</Text>
      <Text style={aboutStyle.copyright}>
        &copy; 2023 Douglas e Vinicius. Todos os direitos reservados.
      </Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
