import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";

const FAB = () => {
  return (
    <View style={styles.fab}>
      <TouchableOpacity>
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
