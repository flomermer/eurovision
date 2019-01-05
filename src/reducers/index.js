import { combineReducers } from 'redux';
import yearReducer from   './year_reducer';
import flagsReducer from  './flags_reducer';

const rootReducer = combineReducers({
  year: yearReducer,
  flags: flagsReducer
});

export default rootReducer;
