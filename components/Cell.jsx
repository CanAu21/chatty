import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";

const Cell = () => {
  return (
    <TouchableOpacity style={styles.cell} onPress={() => [alert("Hey")]}>
      <View style={styles.iconContainer}>
        <Ionicons name="log-out-outline" size={24} color={"white"} />
      </View>
      <Text style={styles.title}>Log Out</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Cell;
