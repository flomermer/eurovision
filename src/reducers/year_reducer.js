import {UPDATE_YEAR} from '../actions/index';

export default function(state=2017, action){
  switch(action.type){
    case UPDATE_YEAR:      
      return action.payload;
    default:
      return state;
  }
}
