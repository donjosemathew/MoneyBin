import AsyncStorage from "@react-native-async-storage/async-storage";
let transactiondata;
const storeTransactionData = async (value) => {
  ///console.log(value);
  try {
    // console.log("Sucess");
    const jsonValue = JSON.stringify({
      data: [...transactiondata, { ...value, id: transactiondata.length + 1 }],
    });
    await AsyncStorage.setItem("data", jsonValue);
    getTransactionData();
  } catch (e) {
    // saving error
    //console.log("Error");
  }
};
const DeleteTransactionData = async (value) => {
  try {
    console.log("Sucess");
    const arr = value;

    const jsonValue = JSON.stringify({
      data: arr,
    });
    await AsyncStorage.setItem("data", jsonValue);
    getTransactionData();
  } catch (e) {
    // saving error
    //console.log("Error");
  }
};
const getTransactionData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("data");

    //console.log(JSON.parse(jsonValue));
    // console.log(JSON.parse(jsonValue));
    transactiondata = JSON.parse(jsonValue).data;

    transactiondata.sort((a, b) => b.date > a.date);
    //console.log(transactiondata, "Sorted");
    return transactiondata;

    //return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e, "Error");
  }
};
export { getTransactionData, storeTransactionData, DeleteTransactionData };
