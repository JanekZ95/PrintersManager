import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  printers: [
    {
      modelName: "LOL",
      manufacturer: "LOL 2",
    },
  ],
  searchQuery: "",
  isLoading: false,
};

const printersSlice = createSlice({
  name: "printersSearch",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    fetchPrinters(state) {
      state.isLoading = true;
    },
    setPrinters(state, action) {
      state.isLoading = false;
      state.printers = action.payload;
    },
  },
});

export const selectPrinters = (state) => state.printersSearch.printers;

export const selectSearchQuery = (state) => state.printersSearch.searchQuery;

export const { setSearchQuery, fetchPrinters, setPrinters } =
  printersSlice.actions;
export default printersSlice.reducer;
