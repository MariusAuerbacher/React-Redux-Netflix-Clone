
/*export const GET_MUSIC = "GET_MUSIC";


export const fetchMusic = (endpoint) => {

  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + endpoint);
      if (response.ok) {
        const { data } = await response.json();

       
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);

    }
  };
};*/

export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_SEARCH = "SET_SEARCH";

export const setSearch = (searchQuery) => {
  return {
    type: SET_SEARCH,
    payload: searchQuery,
  };
};

export const fetchSearch = (value) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${value}`
    );

    const fetchedData = await response.json();
    dispatch({
      type: FETCH_SEARCH,
      payload: fetchedData,
    });
  };
};