import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
let transactiondata;
const storeTransactionData = async (value) => {
  try {
    const jsonValue = JSON.stringify({
      data: [...transactiondata, { ...value, id: uuid.v4() }],
    });
    await AsyncStorage.setItem("data", jsonValue);
    getTransactionData();
  } catch (e) {
    // saving error
  }
};
const DeleteTransactionData = async (value) => {
  try {
    const arr = value;

    const jsonValue = JSON.stringify({
      data: arr,
    });
    await AsyncStorage.setItem("data", jsonValue);
    getTransactionData();
  } catch (e) {
    // saving error
  }
};
const getTransactionData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("data");

    if (jsonValue != null) {
      transactiondata = JSON.parse(jsonValue).data;

      transactiondata.sort((a, b) => b.date > a.date);

      return transactiondata;
    } else {
      transactiondata = [];
      return transactiondata;
    }

    //return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export { getTransactionData, storeTransactionData, DeleteTransactionData };
