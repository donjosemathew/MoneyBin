import AsyncStorage from "@react-native-async-storage/async-storage";
let transactiondata;
const storeTransactionData = async (value) => {
  console.log(value);
  try {
    const jsonValue = JSON.stringify({
      data: [...transactiondata, value],
    });
    await AsyncStorage.setItem("data", jsonValue);
    getTransactionData();
    //console.log("Sucess");
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
    // console.log(transactiondata, "Sorted");
    return transactiondata;

    //return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e, "Error");
  }
};
export { getTransactionData, storeTransactionData };
