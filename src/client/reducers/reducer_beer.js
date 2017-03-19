import reswitch from 'reswitch';
import { FETCH_BEER } from '../actions/index';

const initialState = {
  breweries: [],
};

const breweries = (state = initialState, action) => reswitch(
  FETCH_BEER,
    { ...state, breweries: action.breweries },
)(state, action.type);


// export default function(state = initialState, action) {
//   console.log('here', action.breweries);
//   switch (action.type) {
//   case FETCH_BEER:
//     return [action.breweries, ...state];
//   }
//   return state;
// }

export default breweries;
