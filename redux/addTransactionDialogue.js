import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const counterSlice = createSlice({
  name: "AddDialogue",
  initialState,
  reducers: {
    AddTransactionShowDialogue: (state) => {
      state.show = true;
    },
    HideTransactionHideDialogue: (state) => {
      state.show = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTransactionShowDialogue, HideTransactionHideDialogue } =
  counterSlice.actions;

export default counterSlice.reducer;
