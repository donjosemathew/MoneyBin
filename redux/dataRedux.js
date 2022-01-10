import { createSlice } from "@reduxjs/toolkit";
import { DeleteTransactionData, getTransactionData } from "../DB/database";

const initialState = {
  data: [],
  id: "",
};

export const counterSlice = createSlice({
  name: "dataOperations",
  initialState,
  reducers: {
    getdata: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //gettransactionDataFromDB();
      let data;
      const gettransactionDataFromDB = async () => {
        data = await getTransactionData();
        state.data = data;
        console.log(data);
      };
      gettransactionDataFromDB();
    },
    deleteData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //gettransactionDataFromDB();
      console.log(action.payload);
      const arr = [];
      state.data.forEach((element) => {
        if (element.id !== action.payload) {
          arr.push(element);
        }
      });
      console.log(arr);
      DeleteTransactionData(arr);
      state.data = arr;

      console.log(arr);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getdata, deleteData } = counterSlice.actions;

export default counterSlice.reducer;
