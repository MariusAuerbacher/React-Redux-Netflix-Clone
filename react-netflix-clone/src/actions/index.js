export const STORE_MUSIC = 'STORE_MUSIC'
export const GET_MUSIC = "GET_MUSIC";
export const SET_SEARCH = "SET_SEARCH"


export const storeMusic = (payload) => {
  return {
    type: STORE_MUSIC,
    payload: payload,
  }
}

export const setSearch= (searchquery) => {
  return {
    type: SET_SEARCH,
    payload: searchquery,
  }
}



export const fetchMusic = () => {

  


  return async (dispatch, getState) => {
    
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop");
      if (response.ok) {
        const data  = await response.json();
        dispatch({
          type: GET_MUSIC,
          payload: data
        })
       
      } 
  };
};

