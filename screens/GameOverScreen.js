import { StyleSheet, Text } from "react-native";

function GameOverScreen() {
  return <Text style={styles.style}>Game is over!</Text>;
}

export default GameOverScreen;

const styles = StyleSheet.create({
  style: {
    marginTop: 400,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
