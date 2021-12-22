import { configureStore } from "@reduxjs/toolkit";
import viewTransactionDialogueReducer from "./redux/viewTransactionDialogue";
import addTransactionReducer from "./redux/addTransactionDialogue";
export const store = configureStore({
  reducer: {
    showDialogue: viewTransactionDialogueReducer,
    AddDialogue: addTransactionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
