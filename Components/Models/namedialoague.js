import React, { useState } from "react";
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
import { TextInput } from "react-native-paper";
const NameDialogue = ({ closeAddNameDialogue, storeNameData }) => {
  const [name, setName] = useState("");
  const passNameData = () => {
    if (name.length >= 3) {
      closeAddNameDialogue(name);
      storeNameData(name);
    }
  };
  const closeAddNameDialogueFn = () => {
    closeAddNameDialogue(false);
  };
  return (
    <View
      style={[
        styles.dialogueContainer,
        {
          backgroundColor: !true
            ? "rgba(56, 56, 56, 0)"
            : "rgba(56, 56, 56, 0.37)",
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={true ? "rgba(56, 56, 56, 0.37)" : "#ffff"}
      />
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
          <Text style={styles.HomeSectionHead}>
            Happy to know {"\n"}your Name !
          </Text>

          <View style={styles.inputHolder}>
            <TextInput
              outlineColor="#3FE0AE"
              activeOutlineColor="#3FE0AE"
              style={{
                flex: 1,
                //backgroundColor: "#fffff",
              }}
              mode="outlined"
              label="Name"
              onChangeText={(text) => setName(text)}
            />
            {name.length < 3 ? (
              <Text style={styles.errortext}>Enter Your Name!</Text>
            ) : null}
          </View>
          <View style={styles.dialogueBtm}>
            <TouchableOpacity
              onPress={closeAddNameDialogueFn}
              style={styles.btn}
            >
              <Text style={styles.btnTxt}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={passNameData} style={styles.btnImpo}>
              <Text style={styles.btnTxtImpo}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NameDialogue;

const styles = StyleSheet.create({
  errortext: {
    fontFamily: "DMSansRegular",
    marginTop: 3,
    fontSize: RFValue(12),
    letterSpacing: -0.9100001,
    textAlign: "left",
    color: "#FC5664",
  },
  dialogueBtm: {
    marginTop: 8,
    alignSelf: "flex-end",
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
    //height: Dimensions.get("window").height / 2.65,
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

    padding: 5,
    width: "100%",
    marginTop: 8,
  },
});
