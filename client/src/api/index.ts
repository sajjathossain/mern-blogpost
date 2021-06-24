import axios from 'axios';

const POSTS_URL = 'http://localhost:5000/posts'
// const FORM_URL = 'http://localhost:5000/form'

export const fetchPosts = () => { axios.get(POSTS_URL) }
export const createPost = (newPost: object) => { axios.post(`${POSTS_URL}/create`, newPost) } 