import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import initialStyle from "../../styles/initialStyles";
import { useNavigation } from "@react-navigation/native";

export default function InitialScreen() {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  const handleLoginPress = () => {
    navigation.navigate("Login", {
      name: "",
      email: "",
      age: "",
      weight: "",
      height: "",
    });
  };

  return (
    <SafeAreaView style={initialStyle.containerInitial}>
      <View style={initialStyle.containerButton}>
        <TouchableOpacity
          style={initialStyle.button}
          onPress={handleRegisterPress}
        >
          <Text style={initialStyle.text}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={initialStyle.button}
          onPress={handleLoginPress}
        >
          <Text style={initialStyle.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
