import { configureStore } from "@reduxjs/toolkit";
import viewTransactionDialogueReducer from "./redux/viewTransactionDialogue";
export const store = configureStore({
  reducer: {
    showDialogue: viewTransactionDialogueReducer,
  },
});
