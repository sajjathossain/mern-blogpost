import axios from 'axios';

const POSTS_URL = 'http://localhost:5000/posts'
// const FORM_URL = 'http://localhost:5000/form'

export const fetchPosts = () => { axios.get('http://localhost:5000/posts') }
export const createPost = (newPost: any) => { axios.post(`${POSTS_URL}/create`, newPost) } 