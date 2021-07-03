import axios from 'axios';

const POSTS_URL = 'http://localhost:5000/posts'

export const fetchPosts = () => { return axios.get(POSTS_URL) }
export const createPost = (newPost: any) => { return axios.post(`${POSTS_URL}/create`, newPost) } 
export const getPost = () => { return axios.get(`${POSTS_URL}/getPost`) } 