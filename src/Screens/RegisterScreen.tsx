import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import registerStyle from "../../styles/registerStyles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={registerStyle.containerRegister}>
      <View style={registerStyle.containerInput}>
        <ScrollView>
          <Text style={registerStyle.titleRegister}>Cadastro</Text>

          <TextInput
            style={registerStyle.inputText}
            placeholder="Nome Completo"
            defaultValue={nome}
            onChangeText={(newNome) => setNome(newNome)}
          />

          <TextInput
            style={registerStyle.inputText}
            placeholder="Idade"
            defaultValue={idade}
            onChangeText={(newIdade) => setIdade(newIdade)}
            keyboardType="numeric"
          />
          <TextInput
            style={registerStyle.inputText}
            placeholder="Peso"
            defaultValue={peso}
            onChangeText={(newPeso) => setPeso(newPeso)}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={registerStyle.inputText}
            placeholder="Altura"
            defaultValue={altura}
            onChangeText={(newAltura) => setAltura(newAltura)}
            keyboardType="decimal-pad"
          />
          <TextInput
            style={registerStyle.inputText}
            placeholder="Email"
            defaultValue={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
          <TextInput
            style={registerStyle.inputText}
            placeholder="Senha"
            defaultValue={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            secureTextEntry
          />
          <TextInput
            style={registerStyle.inputText}
            placeholder="Confirmar Senha"
            defaultValue={confPassword}
            onChangeText={(newPasswordConf) => setconfPassword(newPasswordConf)}
            secureTextEntry
          />
          <StatusBar style="dark" />
        </ScrollView>
        <TouchableOpacity
          style={registerStyle.button}
          onPress={() => {
            navigation.navigate("Login", {
              name: nome,
              email: email,
              weight: peso,
              age: idade,
              height: altura,
            });
          }}
        >
          <Text style={registerStyle.text}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
