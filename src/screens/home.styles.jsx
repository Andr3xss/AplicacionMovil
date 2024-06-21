// home.styles.jsx

import { StyleSheet } from "react-native";

export const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBlanco: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
  botonesContainer: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 8,
  },
});