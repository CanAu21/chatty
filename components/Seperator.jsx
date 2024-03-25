import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../config/constants";

const Seperator = () => {
  return (
    <View style={styles.seperator}>
      <Text>Seperator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginStart: 89,
  },
});

export default Seperator;
