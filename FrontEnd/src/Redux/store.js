import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import thunk from "redux-thunk";
import { Reducer } from "./BmiData/reducer";
import { loginReducer } from "./Login/logInRedusre";

import { RegristionReducer } from "./Rigistration/registrationRedusre";

const rootReduser = combineReducers({
  registration: RegristionReducer,
  login: loginReducer,
  bmi:Reducer
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
