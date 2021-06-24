import axios from 'axios';

const POSTS_URL = 'http://localhost:5000/posts'
// const FORM_URL = 'http://localhost:5000/form'

export const fetchPosts = () => { return axios.get(POSTS_URL) }
export const createPost = (newPost: any) => { return axios.post(`${POSTS_URL}/create`, newPost) } 