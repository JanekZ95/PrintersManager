import { configureStore } from "@reduxjs/toolkit";
import printerSeachReducer from "../features/printersSearchView/printersSearchViewSlice";

export const store = configureStore({
  reducer: {
    printersSearch: printerSeachReducer,
  },
});
