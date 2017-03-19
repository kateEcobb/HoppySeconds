import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import BeerReducer from './reducer_beer';

const rootReducer = combineReducers({
  beer: BeerReducer,
  routing: routerReducer,
});

export default rootReducer;
