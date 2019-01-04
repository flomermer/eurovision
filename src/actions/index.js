export const UPDATE_YEAR = 'UPDATE_YEAR';

export function updateYear(year){
  return{
    type: UPDATE_YEAR,
    payload: year
  };
}
