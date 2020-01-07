import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import reducer from "./reducer";
import { rootEpic } from "./epics";

export default function initStore(initialState) {
  const epicMiddleware = createEpicMiddleware();
  const logger = createLogger({ collapsed: true });
  const reduxMiddleware = applyMiddleware(epicMiddleware, logger);

  const store = createStore(reducer, initialState, reduxMiddleware);
  epicMiddleware.run(rootEpic);

  return store;
}
