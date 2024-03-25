import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Contact from "../components/Contact";
import Seperator from "../components/Seperator";

const Chats = () => {
  return (
    <SafeAreaView>
      <Contact
        name="Furkan Can"
        subtitle="React Native"
        onPress={() => {
          alert("Hi, Furkan Can touched");
        }}
      />
      <Seperator />
      <Contact
        name="User Name"
        subtitle="React Native"
        onPress={() => {
          alert("Hi, Furkan Can touched");
        }}
      />
    </SafeAreaView>
  );
};

export default Chats;
