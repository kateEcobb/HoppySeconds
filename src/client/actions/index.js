import { FETCH_BEER } from './ActionTypes';
import * as BeerApi from '../api/BeerApi';

export function fetchBeer(city = 'San Francisco') {
  return async (dispatch) => {
    const { breweries } = await BeerApi.getBreweries(city);

    dispatch({
      type: FETCH_BEER,
      breweries,
    });
  };
}
