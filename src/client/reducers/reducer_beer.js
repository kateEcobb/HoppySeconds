import reswitch from 'reswitch';
import { FETCH_BEER } from '../actions/ActionTypes';

const initialState = {
  breweries: [],
};

export default (state = initialState, action) => reswitch(
  FETCH_BEER,
    { ...state, breweries: action.breweries },
)(state, action.type);
