import { createSlice } from '@reduxjs/toolkit';

const name = 'printers';
const initialState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

export const printersActions = slice.actions;
export const printersReducer = slice.reducer;

function createInitialState() {
    return {
        loading: false,
        searchQuery: '',
        error: '',
        printers: [],
        pageInfo: {
            currentPage: 1,
            pageSize: 10,
        },
        printerDetails: {
            create: false,
            loading: false,
            data: null,
        },
    };
}

function createReducers() {
    return {
        fetchPrinters,
        fetchPrintersFulfilled,
        fetchPrintersRejected,

        changePage,

        setQuery,

        openPrinterDetails,
        openPrinterDetailsFulfilled,
        openPrinterDetailsRejected,
        closePrinterDetails,

        updatePrinter,
        updatePrinterFulfilled,
        updatePrinterRejected,

        closePopups,

        deletePrinter,
        deletePrinterFulfilled,
        deletePrinterRejected,

        openCreatePrinter,
        createPrinter,
        createPrinterFulfilled,
        createPrinterRejected,
    };

    function changePage(state, action) {
        state.pageInfo.currentPage = action.payload;
    }

    function fetchPrinters(state) {
        state.error = null;
        state.loading = true;
    }

    function fetchPrintersFulfilled(state, action) {
        state.printers = action.payload.printers;
        state.pageInfo = action.payload.pageInfo;
        state.loading = false;
    }

    function fetchPrintersRejected(state, action) {
        state.error = action.payload;
        state.loading = false;
    }

    function setQuery(state, action) {
        state.searchQuery = action.payload;
    }

    function openPrinterDetails(state) {
        state.printerDetails.loading = true;
    }

    function openPrinterDetailsFulfilled(state, action) {
        state.printerDetails = {
            ...state.printerDetails,
            loading: false,
            data: action.payload,
        };

        console.log(state.printerDetails);
    }

    function openPrinterDetailsRejected(state, action) {
        state.error = action.payload;
        state.printerDetails = {
            ...state.printerDetails,
            loading: false,
        };
    }

    function closePrinterDetails(state) {
        state.printerDetails = {
            loading: false,
            data: null,
        };
    }

    function updatePrinter() {}

    function updatePrinterFulfilled(state) {
        state.printerDetails.data = null;
        state.successMessage = 'Success!';
    }

    function updatePrinterRejected(state, action) {
        state.error = action.payload;
        state.printerDetails.data = null;
    }

    function closePopups(state) {
        state.error = null;
        state.successMessage = null;
    }

    function deletePrinter() {}

    function deletePrinterFulfilled(state) {
        state.printerDetails.data = null;
        state.successMessage = 'Success!';
    }

    function deletePrinterRejected(state, action) {
        state.error = action.payload;
        state.printerDetails.data = null;
    }

    function openCreatePrinter(state) {
        state.printerDetails.create = true;
        state.printerDetails.data = {
            modelName: '',
            manufacturer: '',
            isDuplex: false,
            isLaser: false,
        };
    }

    function createPrinter() {}

    function createPrinterFulfilled(state) {
        state.printerDetails.data = null;
        state.printerDetails.create = false;
        state.successMessage = 'Success!';
    }

    function createPrinterRejected(state, action) {
        state.printerDetails.create = false;
        state.error = action.payload;
    }
}
