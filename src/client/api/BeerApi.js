import axios from 'axios';

export async function getBreweries(city) {
  const response = await axios.post('/api/breweries', { city: city });
  const json = await response.json();

  console.log(json)
  return true;
}
