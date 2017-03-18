import { combineReducers } from 'redux';
import BeerReducer from './reducer_beer';

const rootReducer = combineReducers({
  beer: BeerReducer
});

export default rootReducer;
