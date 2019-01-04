import {UPDATE_YEAR} from '../actions/index';
import {DEFAULT_YEAR} from '../consts';

export default function(state=DEFAULT_YEAR, action){
  switch(action.type){
    case UPDATE_YEAR:
      return action.payload;
    default:
      return state;
  }
}
