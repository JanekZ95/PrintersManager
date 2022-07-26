import {
    call,
    put,
    select,
    takeEvery,
    takeLatest,
    throttle,
} from 'redux-saga/effects';
import { Api } from '_apis/printers.api';
import { printersActions } from '_store/printers.slice';

const pageInfoSelector = (state) => state.printers.pageInfo;
const querySelector = (state) => state.printers.searchQuery;

function* fetchPrinters(action) {
    try {
        const pageInfo = yield select(pageInfoSelector);
        const results = yield call(Api.getPrinters, {
            query: action.payload,
            ...pageInfo,
        });
        yield put(printersActions.fetchPrintersFulfilled(results));
    } catch (err) {
        console.log(err);
        yield put(printersActions.fetchPrintersRejected(err.message));
    }
}

function* fetchPrinterDetails(action) {
    try {
        const result = yield call(Api.getPrinterDetails, action.payload);
        yield put(printersActions.openPrinterDetailsFulfilled(result));
    } catch (err) {
        yield put(printersActions.openPrinterDetailsRejected(err.message));
    }
}

function* updatePrinter(action) {
    try {
        const result = yield call(Api.updatePrinter, action.payload);
        yield put(printersActions.updatePrinterFulfilled(result));
        const query = yield select(querySelector);
        yield put(printersActions.fetchPrinters(query));
    } catch (err) {
        console.log(err);
        yield put(printersActions.updatePrinterRejected(err.message));
    }
}

function* deletePrinter(action) {
    try {
        const result = yield call(Api.deletePrinter, action.payload);
        yield put(printersActions.deletePrinterFulfilled(result));
        const query = yield select(querySelector);
        yield put(printersActions.fetchPrinters(query));
    } catch (err) {
        console.log(err);
        yield put(printersActions.deletePrinterRejected(err.message));
    }
}

function* createPrinter(action) {
    try {
        const result = yield call(Api.createPrinter, action.payload);
        yield put(printersActions.createPrinterFulfilled(result));
        const query = yield select(querySelector);
        yield put(printersActions.fetchPrinters(query));
    } catch (err) {
        console.log(err);
        yield put(printersActions.createPrinterRejected(err.message));
    }
}

export function* printersSaga() {
    yield throttle(500, printersActions.fetchPrinters().type, fetchPrinters);
    yield takeLatest(printersActions.openPrinterDetails, fetchPrinterDetails);
    yield takeEvery(printersActions.updatePrinter, updatePrinter);
    yield takeEvery(printersActions.deletePrinter, deletePrinter);
    yield takeEvery(printersActions.createPrinter, createPrinter);
}
