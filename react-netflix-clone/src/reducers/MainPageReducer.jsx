import { GET_MUSIC } from "../actions";

const initialState = {
  musicStore: [],
};

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return { ...state, musicStore: [...state.musicStore, action.payload] };
    default:
      return state;
  }
};

export default MainPageReducer;