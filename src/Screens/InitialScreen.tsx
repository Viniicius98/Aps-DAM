import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import "react-native-gesture-handler";
import registerStyle from "../../styles/registerStyles";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function InitialScreen() {
  return <SafeAreaView style={registerStyle.containerRegister}></SafeAreaView>;
}
