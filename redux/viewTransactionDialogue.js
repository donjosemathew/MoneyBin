import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  index: { label: "", amount: 0, date: new Date(), type: "income" },
};

export const counterSlice = createSlice({
  name: "showDialogue",
  initialState,
  reducers: {
    showDialogue: (state, action) => {
      state.index = action.payload;
      state.show = true;
    },
    hideDialogue: (state) => {
      state.show = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showDialogue, hideDialogue } = counterSlice.actions;

export default counterSlice.reducer;
