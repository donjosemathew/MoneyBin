import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";

const FAB = ({ ShowAddNameDialogue }) => {
  return (
    <View style={styles.fab}>
      <TouchableOpacity onPress={ShowAddNameDialogue}>
        <Icon size={60} name="add-circle" type="ionicon" color="#263238" />
      </TouchableOpacity>
    </View>
  );
};
export default FAB;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 14,
    left: 14,
  },
});
