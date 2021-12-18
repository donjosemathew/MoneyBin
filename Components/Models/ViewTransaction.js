import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideDialogue } from "../../redux/viewTransactionDialogue";
const ViewTransaction = ({
  viewtransactionDialogue,
  closeViewTransactionDialogue,
}) => {
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

  const visibleRedux = useSelector((state) => state.showDialogue.show);
  const dataSelected = useSelector((state) => state.showDialogue.index);
  const dispatch = useDispatch();

  const closeDialogue = () => {
    dispatch(hideDialogue());
  };
  return visibleRedux ? (
    <View
      style={[
        styles.dialogueContainer,
        {
          backgroundColor: "rgba(56, 56, 56, 0.37)",
          zIndex: 1000,
        },
      ]}
    >
      <StatusBar backgroundColor={"rgba(56, 56, 56, 0.37)"} />
      <Modal
        style={styles.container}
        transparent={true}
        animationType="fade"
        visible={visibleRedux}
      >
        <View
          style={[
            styles.dialogue,
            {
              transform: [{ translateY: Dimensions.get("window").height / -5 }],
            },
          ]}
        >
          <Text style={styles.HomeSectionHead}>Transaction </Text>
          <Text style={styles.viewTransactionDate}>12 Januvary 2021</Text>
          <View style={styles.viewTransactionCard}>
            <Text style={styles.cardTotalTransactionsValue}>
              ₹{" "}
              <Text style={styles.cardTotalTransactionsValueBold}>
                {dataSelected.amount < 0
                  ? dataSelected.amount * -1
                  : dataSelected.amount}
              </Text>
            </Text>
            <View style={styles.viewTransactionCardLabel}>
              <Text style={styles.viewTransactionDate}>
                {dataSelected.label}
              </Text>
            </View>
          </View>
          <View style={styles.chipsHolder}>
            {dataSelected.type == "income" ? (
              <TouchableOpacity
                style={[
                  styles.chips,
                  {
                    backgroundColor: "#3FE0AE",
                  },
                ]}
              >
                <Icon
                  size={22}
                  name="arrow-up-circle"
                  type="ionicon"
                  color="#263238"
                />
                <Text style={styles.chipsText}>Income</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => SettransactionMethod("expense")}
                style={[
                  styles.chips,
                  {
                    backgroundColor: "#FC5664",
                    marginLeft: 4,
                  },
                ]}
              >
                <Icon
                  size={22}
                  name="arrow-down-circle"
                  type="ionicon"
                  color="#263238"
                />
                <Text style={styles.chipsText}>Expense</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.dialogueBtm}>
            <TouchableOpacity style={styles.deletebtn}>
              <Icon size={22} name="trash" type="ionicon" color="#FC5664" />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeDialogue} style={styles.btn}>
              <Text style={styles.btnTxt}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  ) : null;
};

export default ViewTransaction;

const styles = StyleSheet.create({
  deletebtn: {
    width: 35,
    height: 35,
    backgroundColor: "#ECEFF1",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  viewTransactionCardLabel: {
    backgroundColor: "#fff",
    padding: 4,
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    marginTop: 4,
    borderRadius: 20,
  },
  cardTotalTransactionsValue: {
    fontSize: RFValue(32),
    fontFamily: "DMSansRegular",
    letterSpacing: -0.500001,
    color: "#ffffff",
    textAlignVertical: "center",
    lineHeight: 42,
  },
  cardTotalTransactionsValueBold: {
    fontFamily: "DMSansBold",
  },
  viewTransactionCard: {
    backgroundColor: "#3FE0AE",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    padding: 15,
    paddingTop: 28,
    paddingBottom: 28,
    borderRadius: 4,
  },
  viewTransactionDate: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(16),
    letterSpacing: -0.300001,
    color: "#90A4AE",
    textAlign: "center",
    marginTop: 3,
    marginBottom: 6,
  },
  chipsHolder: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
    marginBottom: 5,
  },
  chipsText: {
    fontFamily: "DMSansRegular",
    fontSize: RFValue(15),
    letterSpacing: -0.9100001,
    marginLeft: 3,
    textAlign: "center",
  },
  chips: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 25,
  },
  dialogueBtm: {
    marginTop: 8,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14,
  },
  btnImpo: {
    backgroundColor: "#3FE0AE",
    padding: 7,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 20,
  },
  btnTxtImpo: {
    fontFamily: "DMSansBold",
    fontSize: RFValue(15),
    letterSpacing: -0.300001,
    color: "#ffff",
    textAlign: "center",
  },
  btn: {
    marginLeft: 6,
    padding: 7,
    paddingLeft: 22,
    paddingRight: 22,
    borderRadius: 20,
  },
  btnTxt: {
    fontFamily: "DMSansBold",
    fontSize: RFValue(15),
    letterSpacing: -0.300001,
    color: "#263238",
    textAlign: "center",
  },
  dialogueContainer: {
    flex: 1,

    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  HomeSectionHead: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(20),
    letterSpacing: -1.300001,
    color: "#263238",
    textAlign: "center",
    marginTop: 8,
  },
  dialogue: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    width: "85%",
    // height: Dimensions.get("window").height / 2.15,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    padding: 18,
    paddingTop: 20,
    position: "absolute",
    top: "50%",
  },
  inputHolder: {
    position: "relative",
    marginTop: 6,
    padding: 5,
    width: "100%",
  },
});
