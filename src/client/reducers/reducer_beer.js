import { FETCH_BEER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type){
  case FETCH_BEER:
    return [ action.payload.data, ...state ];
  }
  return state;
}
