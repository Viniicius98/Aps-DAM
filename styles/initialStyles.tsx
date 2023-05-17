import { StyleSheet, Text, View, Button } from "react-native";

const initialStyle = StyleSheet.create({
  containerInitial: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    width: "80%",
    height: "70%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0C134F",
  },
  button: {
    width: "40%",
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D4ADFC",
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  containerText: {
    width: "40%",
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center", // Centraliza o texto verticalmente
  },
});

export default initialStyle;
