import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar,SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.div1}>
          <Text>Search</Text>
        </View>
        <View style={styles.div2}>
          <Text style={{ padding: 20 }}>Meals</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // paddingTop : 50,
    marginTop: StatusBar.currentHeight

  },
  div1: {
    // flex: 1,
    backgroundColor: "red",
    padding: 20,
  },
  div2: {
    flex: 1,
    backgroundColor: "green",
  },
});
