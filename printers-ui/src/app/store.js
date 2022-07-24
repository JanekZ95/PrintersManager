import { configureStore } from "@reduxjs/toolkit";
import printerSeachReducer from "../features/printersSearchView/printersSearchViewSlice";
import createSagaMiddleware from "redux-saga";
import printersSaga from "../sagas/printersSaga";
import usersSaga from "../sagas/usersSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    printersSearch: printerSeachReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(printersSaga);
sagaMiddleware.run(usersSaga);
