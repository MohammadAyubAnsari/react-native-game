import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/startGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
