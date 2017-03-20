import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import breweries from './reducer_beer';

const rootReducer = combineReducers({
  breweries,
  routing: routerReducer,
});

export default rootReducer;
