import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  printers: [],
  searchQuery: "",
  isLoading: false,
  errorMessage: "",
  pageInfo: {
    currentPage: 1,
    pageSize: 10,
  },
  selectedPrinter: {},
  successPopupVisible: false,
  token: "",
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
      console.log(action.payload);
      state.printers = action.payload.printers;
      state.pageInfo = action.payload.pageInfo;
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
    setPrinter(state, action) {
      state.printers = state.printers.map((printer) =>
        printer._id === action.payload._id
          ? {
              ...printer,
              modelName: action.payload.modelName,
              manufacturer: action.payload.manufacturer,
            }
          : printer
      );
    },
    changePage(state, action) {
      state.pageInfo.currentPage = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
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
  setPrinter,
  changePage,
  setToken,
} = printersSlice.actions;
export default printersSlice.reducer;
