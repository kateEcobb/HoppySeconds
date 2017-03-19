import axios from 'axios';

export async function getBreweries(city) {
  const response = await axios.post('/api/breweries', { city: city });

  return {
    breweries: response.data.data,
  };
}
