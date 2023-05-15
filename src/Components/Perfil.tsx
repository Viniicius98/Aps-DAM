import {  Text,SafeAreaView, Image, View, } from 'react-native';
import perfilStyle from '../../styles/perfilStyles';

export default function HeaderComponent(props:any){
    const nome=props.name;
    const idade =props.idade;
    const peso =props.peso;
    const altura = props.altura;
    return (
        <SafeAreaView style={perfilStyle.perfilContainer}>
            <View style={perfilStyle.perfil}>
                <Image style={perfilStyle.perfilImage} source={require("../../assets/images/perfil.png")} />
            </View>
            <View style={perfilStyle.perfilName}>
                <Text style={perfilStyle.perfilText}> Nome:{nome} </Text>
                <Text style={perfilStyle.perfilText}> Idade: {idade}</Text>
                <Text style={perfilStyle.perfilText}> Altura : {altura}</Text>
                <Text style={perfilStyle.perfilText}> Peso: {peso}</Text>
            </View>
           
        </SafeAreaView>
    )
}


