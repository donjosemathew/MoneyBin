import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import React from "react";
import { useDispatch } from "react-redux";
import { AddTransactionShowDialogue } from "../redux/addTransactionDialogue";

const FAB = ({}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.fab}>
        <TouchableOpacity
          onPress={() => dispatch(AddTransactionShowDialogue())}
        >
          <Icon size={60} name="add-circle" type="ionicon" color="#263238" />
        </TouchableOpacity>
      </View>
    </>
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
