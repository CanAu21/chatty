import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../config/constants";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Create new account</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <TextInput style={styles.input} placeholder="Enter your email" />
          <TextInput style={styles.input} placeholder="Enter your password" />

          <View style={styles.bottonsContainer}>
            <Button title="Sign In" variant="secondary" />
            <Button title="Sign Up" variant="primary" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  contentContainer: {
    padding: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "white",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  bottonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  bottonContainer: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "black",
  },
  buttonLabel: {
    fontSize: 18,
    color: "white",
  },
});

export default SignUp;
