import { Text, SafeAreaView, Image } from "react-native";
import headerStyle from "../../styles/headerStyles";

export default function HeaderComponent({ title }: { title: string }) {
  return (
    <SafeAreaView style={headerStyle.headerContainer}>
      <Image
        style={headerStyle.image}
        source={require("../../assets/images/weightlifter.png")}
      />
      <Text style={headerStyle.title}>{title}</Text>
    </SafeAreaView>
  );
}
