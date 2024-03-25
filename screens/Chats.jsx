import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Contact from "../components/Contact";
import Seperator from "../components/Seperator";

const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);

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
