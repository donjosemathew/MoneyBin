import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { showDialogue } from "../redux/viewTransactionDialogue";

import { useSelector } from "react-redux";

const TransactionCard = ({ data }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.showDialogue.show);
  const date = new Date(data.date);
  return (
    <>
      <TouchableOpacity
        onPress={() => dispatch(showDialogue(data))}
        style={styles.card}
      >
        <View style={styles.cardRow1}>
          <Text style={styles.cardHead}>{data.label}</Text>

          {data.type == "income" ? (
            <Icon
              size={30}
              name="arrow-up-circle"
              type="ionicon"
              color="#3FE0AE"
            />
          ) : (
            <Icon
              size={30}
              name="arrow-down-circle"
              type="ionicon"
              color="#FC5664"
            />
          )}
        </View>
        <View style={styles.cardRow1}>
          <Text style={styles.cardText}>
            {`${date.getDate()} ${
              monthNames[date.getMonth()]
            } ${date.getFullYear()}`}
          </Text>
          <Text style={styles.cardValue}>
            {data.type == "income" ? (
              <Text style={styles.cardValuePositive}>+</Text>
            ) : (
              <Text style={styles.cardValuenegative}>-</Text>
            )}{" "}
            ₹{data.amount < 0 ? data.amount * -1 : data.amount}
          </Text>
        </View>
      </TouchableOpacity>
    </>
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
  cardValuenegative: {
    color: "#FC5664",
  },
  cardRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
