import { call, put, select, throttle } from "redux-saga/effects";
import {
  setPrinters,
  setErrorMessage,
  fetchPrinters,
  selectPageInfo,
  selectSearchQuery,
  setPrinterDetails,
  showSuccess,
  showPrinterDetails,
} from "../features/printersSearchView/printersSearchViewSlice";

import * as Api from "./requests/printersRequests";

function* fetchAllPrinters(action) {
  try {
    const pageInfo = yield select(selectPageInfo);
    const searchQuery = yield select(selectSearchQuery);
    const printers = yield call(Api.getAllPrinters, {
      ...pageInfo,
      searchQuery,
    });
    yield put(setPrinters(printers));
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* fetchPrinterDetails(action) {
  try {
    const printer = yield call(Api.getPrinterById, action.payload);
    yield put(setPrinterDetails(printer));
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* createPrinter(action) {
  try {
    yield call(Api.createPrinter, action.payload);
    yield put(showSuccess());
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* updatePrinter(action) {
  try {
    yield call(Api.updatePrinter, action.payload);
    yield put(showSuccess());
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* deletePrinter(action) {
  try {
    yield call(Api.deletePrinter, action.payload);
    yield put(showSuccess());
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* printersSaga() {
  yield throttle(500, fetchPrinters().type, fetchAllPrinters);
  yield throttle(500, "PRINTER_DETAILS_REQUESTED", fetchPrinterDetails);
  // yield throttle(500, fetchPrinters().type, createPrinter);
  // yield throttle(500, fetchPrinters().type, updatePrinter);
  // yield throttle(500, fetchPrinters().type, deletePrinter);
}

export default printersSaga;
