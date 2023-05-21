import { Text, SafeAreaView, Image, View } from "react-native";
import perfilStyle from "../../styles/perfilStyles";

interface IProps {
  name: string;
  idade: string;
  peso: string;
  altura: string;
}

export default function HeaderComponent(props: IProps) {
  const calcImc = ({
    peso,
    altura,
  }: {
    peso: number;
    altura: number;
  }): { imc: number; classificacao: string } => {
    const alturaMetros = altura / 100;

    // Calcular o IMC
    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }

    return { imc: Number(imc.toFixed(2)), classificacao };
  };

  const peso = parseInt(props.peso); // Em quilogramas
  const altura = parseInt(props.altura); // Em centímetros

  const { imc, classificacao } = calcImc({ peso, altura });

  return (
    <SafeAreaView style={perfilStyle.perfilContainer}>
      <View style={perfilStyle.perfil}>
        <Image
          style={perfilStyle.perfilImage}
          source={require("../../assets/images/perfil.png")}
        />
      </View>
      <View style={perfilStyle.perfilName}>
        <Text style={perfilStyle.perfilText}> Nome: {props.name} </Text>
        <Text style={perfilStyle.perfilText}> Idade: {props.idade}</Text>
        <Text style={perfilStyle.perfilText}> Altura: {props.altura}</Text>
        <Text style={perfilStyle.perfilText}> Peso: {props.peso}</Text>
        <Text style={perfilStyle.perfilText}>
          IMC: {imc}, {classificacao}
        </Text>
      </View>
    </SafeAreaView>
  );
}
