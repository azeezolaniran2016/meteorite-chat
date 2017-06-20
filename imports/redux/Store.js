import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducers/Message';

const rootReducer = combineReducers({messages: messageReducer });

export default store = createStore(rootReducer, applyMiddleware(thunk));