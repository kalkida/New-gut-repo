import {combineReducers ,createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import {applyMiddleware} from 'redux'
import authreducer from "./Reducer/authreducer";
import { register } from '../redux/Actions/auth';

const middleware =  [thunk] 
export const rootReducer = combineReducers({authreducer})
const store = createStore(rootReducer,
    composeWithDevTools (applyMiddleware(...middleware)));

console.log("state");
store.subscribe(() => { console.log(store.getState())})
store.dispatch(register());

export default store;