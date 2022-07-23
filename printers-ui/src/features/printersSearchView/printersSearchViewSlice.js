import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  printers: [],
  searchQuery: "",
  isLoading: false,
  errorMessage: "",
  pageInfo: {
    currentPage: 1,
    pageSize: 50,
  },
  selectedPrinter: {},
  successPopupVisible: false,
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
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setPrinterDetails(state, action) {
      state.selectedPrinter = action.payload;
    },
    showSuccess(state) {
      state.successPopupVisible = true;
    },
    hideSuccess(state) {
      state.successPopupVisible = false;
    },
  },
});

export const selectPrinters = (state) => state.printersSearch.printers;

export const selectSearchQuery = (state) => state.printersSearch.searchQuery;

export const selectPageInfo = (state) => state.printersSearch.pageInfo;

export const selectPrinterDetails = (state) =>
  state.printersSearch.selectedPrinter;

export const {
  setSearchQuery,
  fetchPrinters,
  setPrinters,
  setErrorMessage,
  setPrinterDetails,
  showSuccess,
  showPrinterDetails,
} = printersSlice.actions;
export default printersSlice.reducer;
