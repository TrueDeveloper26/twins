import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";

import reducers from "./reducers";
import rootSaga from "./sagas";

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(
  	// logger, 
  	sagaMiddleware, 
  	routerMiddleware(history)
  )
);

sagaMiddleware.run(rootSaga);
