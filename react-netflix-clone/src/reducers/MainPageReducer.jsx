import { GET_MUSIC, SET_SEARCH } from "../actions/index";

const initialState = {
  musicData: [],
  searchquery: ""
  
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return { ...state, musicData: action.payload };
      case SET_SEARCH:
        return { ...state, searchquery: action.payload };
    default:
      return state;
  }
};

export default musicReducer

