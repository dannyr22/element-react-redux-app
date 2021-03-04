import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL, searchedGameURL } from '../api';

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL())
  const newGamesData = await axios.get(newGamesURL())
  const upcomingData = await axios.get(upcomingGamesURL())
  
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    }
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchedGameURL(game_name))

  dispatch({
    type: 'FETCH_SEARCH',
    payload: {searched: searchGames.data.results}
  })
}