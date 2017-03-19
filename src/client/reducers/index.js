import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import BeerReducer from './reducer_beer';

const rootReducer = combineReducers({
  breweries: BeerReducer,
  routing: routerReducer,
});

export default rootReducer;
