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
    getdata: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //gettransactionDataFromDB();
      let data;

      const gettransactionDataFromDB = async () => {
        data = await getTransactionData();
      };
      //gettransactionDataFromDB();
      state.data = action.payload;
    },

    deleteData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      //gettransactionDataFromDB();

      const arr = [];
      state.data.forEach((element) => {
        if (element.id !== action.payload) {
          arr.push(element);
        }
      });

      DeleteTransactionData(arr);
      state.data = arr;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getdata, deleteData } = counterSlice.actions;

export default counterSlice.reducer;
