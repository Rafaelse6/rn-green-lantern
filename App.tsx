import { StyleSheet, Text, View, Image } from "react-native";
import symbolOn from "./assets/pictures/symbol-on.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={symbolOn}></Image>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
