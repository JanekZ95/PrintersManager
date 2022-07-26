import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { printersSaga } from '_sagas/printers.saga';
import { usersSaga } from '_sagas/users.saga';
import { printersReducer } from './printers.slice';
import { authReducer } from './users.slice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        auth: authReducer,
        printers: printersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

//run sagas
sagaMiddleware.run(usersSaga);
sagaMiddleware.run(printersSaga);
