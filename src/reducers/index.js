import { combineReducers } from 'redux';
import yearReducer from './year_reducer';
const rootReducer = combineReducers({
  year: yearReducer
});

export default rootReducer;
