import { StyleSheet, Text, View, Button } from "react-native";

const perfilStyle = StyleSheet.create({
  perfilContainer: {
    width: "100%",
    height: "20%",
    flexDirection: "row",
    backgroundColor: "#6688CC",
  },
  perfil: {
    width: "40%",
    height: "100%",
    backgroundColor: "#99CCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  perfilImage: {
    width: 80,
    height: 80,
    marginTop: 25,
    marginLeft: 0,
  },
  perfilName: {
    width: "60%",
    height: "100%",
    backgroundColor: "#99CCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  perfilText: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 5,
    color: "#333333",
  },
});

export default perfilStyle;
