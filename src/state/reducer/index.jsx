// this file combines all the reducer files into one reducer function

import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount : amountReducer   // this fuction will have all the reducers in key value pair
})

export default reducers