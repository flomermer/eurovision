import _ from 'lodash';

import {FETCH_FLAGS} from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_FLAGS:
      let flags = action.payload.data[0];
      _.forEach(flags, (value, key, flag) => { //all keys to lowercase
        flag[key.toLowerCase()] = value;
        delete flag[key];
      })
      console.log(flags);
      return flags;
    default:
      return state;
  }
}
