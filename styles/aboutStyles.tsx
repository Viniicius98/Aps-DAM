import { StyleSheet, Text, View, Button } from "react-native";

const aboutStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cbcbe0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  institution: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  creator: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  year: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "gray",
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "blue",
  },
  copyright: {
    fontSize: 12,
    marginTop: 20,
    textAlign: "center",
    color: "gray",
  },
});

export default aboutStyle;
