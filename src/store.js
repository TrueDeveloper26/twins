import { createStore, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
// import { routerMiddleware } from "react-router-redux";
// import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
// import rootSaga from "./sagas";

export const history = createHistory();
// const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({collapsed: true});

export const store = createStore(
  reducers,
  applyMiddleware(
  	logger, 
  	// sagaMiddleware, 
  	// routerMiddleware(history)
  )
);

// sagaMiddleware.run(rootSaga);
