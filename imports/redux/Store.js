import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducers/Message';
import userReducer from './reducers/User';

const rootReducer = combineReducers({
  messages: messageReducer,
  user: userReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));