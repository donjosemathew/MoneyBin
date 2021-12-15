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
import DateTimePicker from "@react-native-community/datetimepicker";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";
import { Icon } from "react-native-elements";
const AddTransactionDialogue = ({
  closeTransactionDialogue,
  transactionDialogue,
}) => {
  const [transactionMethod, SettransactionMethod] = useState("income");
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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [showDatepicker, setShowDatepicker] = useState(false);
  const onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatepicker(false);
    setDate(currentDate);
  };
  return (
    <View
      style={[
        styles.dialogueContainer,
        {
          backgroundColor: !transactionDialogue
            ? "rgba(56, 56, 56, 0)"
            : "rgba(56, 56, 56, 0.37)",
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          transactionDialogue ? "rgba(56, 56, 56, 0.37)" : "#ffff"
        }
      />
      <Modal
        style={styles.container}
        transparent={true}
        animationType="fade"
        visible={transactionDialogue}
      >
        <View
          style={[
            styles.dialogue,
            {
              transform: [{ translateY: Dimensions.get("window").height / -5 }],
            },
          ]}
        >
          <Text style={styles.HomeSectionHead}>Add new Transaction 💳</Text>

          <View style={styles.inputHolder}>
            <TextInput
              outlineColor="#3FE0AE"
              activeOutlineColor="#3FE0AE"
              style={
                {
                  //backgroundColor: "#fffff",
                }
              }
              mode="outlined"
              label="Label"
            />
          </View>
          {showDatepicker ? (
            <DateTimePicker
              style={{
                backgroundColor: "red",
              }}
              textColor="#FFFFFF"
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onDateChanged}
            />
          ) : null}

          <View style={styles.inputHolder}>
            <TextInput
              outlineColor="#3FE0AE"
              activeOutlineColor="#3FE0AE"
              type="number"
              keyboardType="numeric"
              style={
                {
                  //backgroundColor: "#fffff",
                }
              }
              mode="outlined"
              label="Amount"
            />
          </View>
          <View style={styles.datePickerHolder}>
            <Text style={styles.chipsText}>
              {`${date.getDate()} ${
                monthNames[date.getMonth()]
              } ${date.getFullYear()}`}
            </Text>
            <TouchableOpacity
              onPress={() => setShowDatepicker(true)}
              style={styles.datePickerIcnHolder}
            >
              <Icon size={22} name="calendar" type="ionicon" color="#263238" />
            </TouchableOpacity>
          </View>
          <View style={styles.chipsHolder}>
            <TouchableOpacity
              onPress={() => SettransactionMethod("income")}
              style={[
                styles.chips,
                {
                  backgroundColor:
                    transactionMethod === "income" ? "#3FE0AE" : "white",
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
            <TouchableOpacity
              onPress={() => SettransactionMethod("expense")}
              style={[
                styles.chips,
                {
                  backgroundColor:
                    transactionMethod === "expense" ? "#FC5664" : "white",
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
          </View>
          <View style={styles.dialogueBtm}>
            <TouchableOpacity
              onPress={closeTransactionDialogue}
              style={styles.btn}
            >
              <Text style={styles.btnTxt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeTransactionDialogue}
              style={styles.btnImpo}
            >
              <Text style={styles.btnTxtImpo}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTransactionDialogue;

const styles = StyleSheet.create({
  datePickerIcnHolder: {
    marginLeft: 6,
  },
  datePickerHolder: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 6,
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
