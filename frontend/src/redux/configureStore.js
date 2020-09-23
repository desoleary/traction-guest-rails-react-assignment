import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import history from '../history';
import { createRootReducer } from './reducers';

const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    );
    return { ...store, runSaga: sagaMiddleware.run };
};
