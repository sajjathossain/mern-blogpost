import * as api from "../api";

export const getPosts = () => async (dispatch: any) => {
  try {
    const { data }: any = await api.fetchPosts();
    const sorted = [...data];
    sorted.sort((a: any, b: any) => {
      return b.likeCount - a.likeCount;
    });

    await dispatch({ type: "FETCH_ALL", payload: sorted });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post: object) => async (dispatch: any) => {
  try {
    const { data }: any = await api.createPost(post);

    await dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id: any, post: object) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, post);

    await dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id: any) => async (dispatch: any) => {
  try {
    const { data }: any = await api.getPost(id);

    await dispatch({ type: "GET_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id: any) => async (dispatch: any) => {
  try {
    await api.likePost(id);

    await dispatch({ type: "UPDATE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
