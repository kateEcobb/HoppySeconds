import axios from 'axios';


const API_KEY = '0dcc43f414d8075a76b6a44e03817ed3';
const ROOT_URL = `http://api.brewerydb.com/v2/locations?key=${API_KEY}`;

export async function getBreweries(city) {
  const url = `${ROOT_URL}&locality=${city}`;
  const response = await axios.get(url);

  console.log(response)
  return response.json();
}
