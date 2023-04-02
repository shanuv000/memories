// import * as api from "../api";
import * as api from "../api/index.js";

// Action Creators

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

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts();

//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
