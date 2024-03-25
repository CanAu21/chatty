import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constants";

const Cell = ({ title, icon, tintColor, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons name={icon} size={24} color={"white"} />
      </View>
      <Text style={styles.title}>{title}</Text>
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
  },
  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },
});

export default Cell;
