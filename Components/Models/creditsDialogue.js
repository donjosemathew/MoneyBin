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

import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideDialogue } from "../../redux/viewTransactionDialogue";
import { DeleteTransactionData } from "../../DB/database";
import { deleteData, getdata } from "../../redux/dataRedux";
const CreditsDialogue = ({ CloseCreditsDia }) => {
  return (
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
      <View
        style={styles.container}
        transparent={true}
        animationType="fade"
        visible={true}
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
              <Text style={styles.cardTotalTransactionsValueBold}>sdsdds</Text>
            </Text>
            <View style={styles.viewTransactionCardLabel}>
              <Text style={styles.viewTransactionDate}>sdsd</Text>
            </View>
          </View>

          <View style={styles.dialogueBtm}>
            <TouchableOpacity onPress={CloseCreditsDia} style={styles.btn}>
              <Text style={styles.btnTxt}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditsDialogue;

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
