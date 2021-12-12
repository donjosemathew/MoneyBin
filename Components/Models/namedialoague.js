import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
const NameDialogue = ({ nameDialogue, closeAddNameDialogue }) => {
  return (
    <View
      style={[
        styles.dialogueContainer,
        {
          backgroundColor: !nameDialogue
            ? "rgba(56, 56, 56, 0)"
            : "rgba(56, 56, 56, 0.37)",
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={nameDialogue ? "rgba(56, 56, 56, 0.37)" : "#ffff"}
      />
      <Modal
        style={styles.container}
        transparent={true}
        animationType="fade"
        visible={nameDialogue}
      >
        <View
          style={[
            styles.dialogue,
            {
              transform: [{ translateY: Dimensions.get("window").height / -5 }],
            },
          ]}
        >
          <TouchableOpacity onPress={closeAddNameDialogue}>
            <Text style={styles.HomeSectionHead}>
              Happy to know {"\n"}your Name !
            </Text>
          </TouchableOpacity>
          <View style={styles.inputHolder}>
            <TextInput
              outlineColor="#3FE0AE"
              activeOutlineColor="#3FE0AE"
              style={{
                flex: 1,
                //backgroundColor: "#fffff",
              }}
              mode="outlined"
              label="Email"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NameDialogue;

const styles = StyleSheet.create({
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
  },
  dialogue: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    width: "85%",
    height: Dimensions.get("window").height / 2.5,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 18,
    paddingTop: 20,
    position: "absolute",
    top: "50%",
  },
  inputHolder: {
    position: "relative",
    height: "25%",
    padding: 5,
    width: "100%",
    marginTop: 8,
  },
});
