import {
  createStore,
  applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers/snake_reducers";
import watcherSagas from "./sagas/snake_sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSagas);
export default store;