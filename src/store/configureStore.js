import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // STORE creation dengan function reducer yg sdh mencakup action
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
