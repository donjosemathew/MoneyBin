import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Icon } from "react-native-elements";

const TransactionCard = ({ ShowViewTransactionDialogue }) => {
  return (
    <TouchableOpacity onPress={ShowViewTransactionDialogue} style={styles.card}>
      <View style={styles.cardRow1}>
        <Text style={styles.cardHead}>Hostel Fees</Text>
        <Icon size={30} name="arrow-up-circle" type="ionicon" color="#3FE0AE" />
      </View>
      <View style={styles.cardRow1}>
        <Text style={styles.cardText}>12 Januvary 2021</Text>
        <Text style={styles.cardValue}>
          <Text style={styles.cardValuePositive}>+</Text> ₹1200
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default TransactionCard;

const styles = StyleSheet.create({
  card: {
    // width: "100%",
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: "#ECEFF1",
    padding: 12,
    paddingTop: 15,
    borderRadius: 3,
    paddingBottom: 15,
  },
  cardHead: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(18),
    letterSpacing: -0.700001,
    color: "#546E7A",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cardText: {
    fontFamily: "DMSansRegular",
    fontSize: RFValue(13),
    letterSpacing: -0.900001,
    color: "#90A4AE",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cardValue: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(22),
    letterSpacing: -0.900001,
    color: "#263238",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  cardValuePositive: {
    color: "#3FE0AE",
  },
  cardRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
