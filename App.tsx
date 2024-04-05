import { StyleSheet, Text, View, Image } from "react-native";
import symbolOn from "./assets/pictures/symbol-on.png";
import symbolOff from "./assets/pictures/symbol-off.png";

export default function App() {
  const isActive = false;

  return (
    <View style={styles.container}>
      <Image source={isActive ? symbolOn : symbolOff} />
    </View>
  );
}

const styles2 = StyleSheet.create({
  titleStyle: {
    fontSize: 35,
    color: "#f1f1f1",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
