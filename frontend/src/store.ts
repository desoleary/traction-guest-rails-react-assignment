import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { rootSaga } from './ops';
import apiReducer from './state/api';
import globalConfigurationReducer from './state/global-configuration';

const history = createBrowserHistory();

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

const rootReducer = combineReducers({
  api: apiReducer,
  globalConfiguration: globalConfigurationReducer,
});

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default createAppStore();
