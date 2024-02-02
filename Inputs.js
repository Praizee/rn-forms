import { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch,
  View,
} from "react-native";

export default function Inputs() {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Full Name"
        // secureTextEntry // use this for passwords
        // keyboardType="numeric" //use this for keybard type, numeric, text, etc
        autoCorrect={false}
        autoCapitalize="characters" //or none
      />
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Message"
        multiline
      />

      <Text style={styles.text}>
        My name is{" "}
        <Text style={{ color: "plum", textDecorationLine: "underline" }}>
          {name}
        </Text>{" "}
      </Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
          trackColor={{ false: "#767577", true: "lightblue" }}
          thumbColor="#f3f4f4"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    marginVertical: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top", //align input text to the top after the 'multiline' prop makes it centered
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
