import { createStore, combineReducers } from "redux";
import blogAuthReducer from "./ducks/blogAuth";
import accountPrefReducer from "./ducks/accountPref";

const reducer = combineReducers({
  auth: blogAuthReducer,
  accountPrefs: accountPrefReducer,
});

const store = createStore(reducer);

export default store;
