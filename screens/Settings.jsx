import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Contact from "../components/Contact";
import { colors } from "../config/constants";
import Seperator from "../components/Seperator";
import { Ionicons } from "@expo/vector-icons";
import Cell from "../components/Cell";

const Settings = () => {
  return (
    <View>
      <Contact
        name="Furkan Can"
        subtitle="furkan@outlook.com"
        style={styles.contactRow}
      />
      <Seperator />
      <Cell />
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  cell: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: colors.red,
  },
  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },
});

export default Settings;
