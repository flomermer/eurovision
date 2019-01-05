import axios from 'axios';
import {ROOT_API} from '../consts';

export const UPDATE_YEAR  = 'UPDATE_YEAR';
export const FETCH_FLAGS  = 'FETCH_FLAGS';

export function updateYear(year){
  return{
    type: UPDATE_YEAR,
    payload: year
  };
}

export function fetchFlags(){
  const request = axios.get(`${ROOT_API}/flags`);

  return{
    type: FETCH_FLAGS,
    payload: request
  };
}
