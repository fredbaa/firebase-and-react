import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MessagesReducer from './reducers-messages';

const rootReducer = combineReducers({
  posts: MessagesReducer,
  form: formReducer
});

export default rootReducer;
