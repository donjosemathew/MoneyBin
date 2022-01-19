import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import { storeTransactionData } from "../../DB/database";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { HideTransactionHideDialogue } from "../../redux/addTransactionDialogue";

const AddTransactionDialogue = ({ gettransactionDataFromDB }) => {
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

  const [showDatepicker, setShowDatepicker] = useState(false);
  const onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatepicker(false);
    setDate(currentDate);
  };

  ////////////
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionMethod, SettransactionMethod] = useState("income");

  const AddDataToDB = () => {
    if (label !== "" && amount !== "") {
      closeDialogue();
      const data = {
        label: label,
        amount: transactionMethod == "income" ? amount : amount * -1,
        date: date,
        type: transactionMethod,
      };
      storeTransactionData(data);
      gettransactionDataFromDB();
    }
  };
  //////////////redux
  const visible = useSelector((state) => state.AddDialogue.show);
  const dispatch = useDispatch();
  const closeDialogue = () => {
    dispatch(HideTransactionHideDialogue());
  };
  useEffect(() => {
    setAmount("");
    setLabel("");
  }, [visible]);
  return visible ? (
    <>
      <View
        style={[
          styles.dialogueContainer,
          {
            backgroundColor: "rgba(56, 56, 56, 0.37)",
          },
        ]}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={"rgba(56, 56, 56, 0.37)"}
        />
        <View style={styles.container}>
          <View
            style={[
              styles.dialogue,
              {
                transform: [
                  { translateY: Dimensions.get("window").height / -4 },
                ],
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
                onChangeText={(text) => setLabel(text)}
                mode="outlined"
                label="Label"
              />
              {label.length == 0 ? (
                <Text style={styles.errortext}>
                  Label Field Cannot be empty!
                </Text>
              ) : null}
            </View>
            {showDatepicker ? (
              <DateTimePicker
                style={{
                  backgroundColor: "red",
                }}
                textColor="#FFFFFF"
                testID="dateTimePicker"
                value={date}
                mode={"date"}
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
                onChangeText={(text) => {
                  setAmount(text);
                }}
                mode="outlined"
                label="Amount"
              />
              {amount.length == 0 ? (
                <Text style={styles.errortext}>
                  Amount Field Cannot be empty!
                </Text>
              ) : null}
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
                <Icon
                  size={22}
                  name="calendar"
                  type="ionicon"
                  color="#263238"
                />
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
              <TouchableOpacity onPress={closeDialogue} style={styles.btn}>
                <Text style={styles.btnTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={AddDataToDB} style={styles.btnImpo}>
                <Text style={styles.btnTxtImpo}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  ) : null;
};

export default AddTransactionDialogue;

const styles = StyleSheet.create({
  errortext: {
    fontFamily: "DMSansRegular",
    marginTop: 3,
    fontSize: RFValue(12),
    letterSpacing: -0.9100001,
    textAlign: "left",
    color: "#FC5664",
  },
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
