import {combineReducers, createStore, applyMiddleware} from 'redux'
import weatherReducer from './weather-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  weatherPage: weatherReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store