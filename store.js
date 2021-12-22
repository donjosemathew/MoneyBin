import { configureStore } from "@reduxjs/toolkit";
import viewTransactionDialogueReducer from "./redux/viewTransactionDialogue";
import addTransactionReducer from "./redux/addTransactionDialogue";
import dataOperationsReducer from "./redux/dataRedux";
export const store = configureStore({
  reducer: {
    showDialogue: viewTransactionDialogueReducer,
    AddDialogue: addTransactionReducer,
    dataOperations: dataOperationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
