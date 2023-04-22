import axios from "axios";
import {
    GET_POP,
  SEARCH_ERROR,
  SEARCH_LOAD,
  SEARCH_RES,
} from "../../constants/searchPage/ActionTypes";

const apiKey = "ce0659c825d9b20b83594dba4f3043c8";

let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

const searchAction = (searchIn) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_LOAD });
    try {
      axios
        .get(
          `${url}&language=en-US&query=${searchIn}&page=1&include_adult=false`
        )
        .then((res) => {
          dispatch({ type: SEARCH_RES, payload: res.data.results });
        });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };
};

const getPopular = () => {
  return (dispatch) => {
    dispatch({ type: SEARCH_LOAD });
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        )
        .then((res) => {
          dispatch({ type: GET_POP, payload: res.data.results });
        });
    } catch (error) {
      dispatch({ type: SEARCH_ERROR });
    }
  };
};


export {searchAction, getPopular}
