/* import { GET_MUSIC } from "../actions/index";

const initialState = {
  musicStore: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return { ...state, musicStore: [...state.musicStore, action.payload] };
    default:
      return state;
  }
};

export default musicReducer; */

import { FETCH_SEARCH, SET_SEARCH } from "../actions/index";

const initialState = {
  searchquery: "search here...",
  searchData: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,

        searchData: action.payload,
      };
    case SET_SEARCH:
      return { ...state, searchquery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;