import * as api from "../api";

//Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    //here data = response.data;
    const { data } = await api.fetchPosts;
    // const action = { type: "FETCH_ALL", payload: [] };
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
