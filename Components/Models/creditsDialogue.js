import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import * as MailComposer from "expo-mail-composer";
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
          <Text style={styles.name}>MoneyBin v1.0 Beta</Text>
          <Text style={styles.HomeSectionSubTxt}>Coded with ❤️</Text>

          <Text style={[styles.HomeSectionSubTxt, { marginTop: 25 }]}>
            Coded by donjosemathew
          </Text>
          <TouchableOpacity
            onPress={() =>
              MailComposer.composeAsync({
                subject: "MoneyBin | Developer Contact",
                recipients: ["donjosemathew.mail@gmail.com"],
              })
            }
          >
            <Text style={styles.HomeSectionSubTxt2}>Developer Contact 💌</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text style={[styles.HomeSectionSubTxt2, { textAlign: "center" }]}>
              Special Thanks {"\n"}🧑👦🧒🧑‍🦱{"\n"}Sam Jose | Ameg S | Abhiram
              S | Pranv M
            </Text>
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
  HomeSectionSubTxt2: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(14),
    letterSpacing: -0.700001,
    color: "#90A4AE",
    marginTop: 3,
  },
  HomeSectionSubTxt: {
    fontFamily: "DMSansMedium",
    fontSize: RFValue(15),
    letterSpacing: -0.700001,
    color: "#90A4AE",
    marginTop: 8,
  },
  name: {
    //marginTop: Dimensions.get("window").height / 50,
    color: "#263238",
    fontSize: RFValue(24),
    textAlign: "center",
    fontFamily: "DMSansRegular",
    letterSpacing: -1.100001,
    zIndex: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  dialogueImg: {
    padding: 5,
    height: Dimensions.get("window").height / 2.8,
    position: "relative",
    resizeMode: "contain",
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
