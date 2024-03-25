import { View, StyleSheet } from "react-native";
import React from "react";
import Contact from "../components/Contact";
import { colors } from "../config/constants";
import Seperator from "../components/Seperator";
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
      <Cell
        onPress={() => alert("dont touch me")}
        title="Log Out"
        icon="log-out-outline"
        tintColor={colors.red}
      />
      <Cell
        onPress={() => alert("dont touch me")}
        style={{ marginTop: 20 }}
        title="Help"
        icon="information-outline"
        tintColor={colors.green}
      />
      <Cell
        onPress={() => alert("dont touch me")}
        title="Tell a Friend"
        icon="heart-outline"
        tintColor={colors.pink}
      />
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
});

export default Settings;
