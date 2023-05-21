import { StyleSheet, Text, View, Button } from "react-native";

const homeStyle = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#336699",
  },
  background: {
    width: 450,
    height: 150,
    marginTop: 0,
    opacity: 0.5,
    backgroundColor: "#050505",
  },
  itemsContainer: {
    width: "100%",
    height: "60%",
  },
  items: {
    width: "100%",
    height: 90,
    marginLeft: 4,
    paddingLeft: 8,
    backgroundColor: "#6688CC",
    borderBottomColor: "#000",
    borderBottomWidth: 8,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 0,
  },
});

export default homeStyle;
