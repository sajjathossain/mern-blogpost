import * as api from '../api'

export const getPosts = () => async (dispatch: any) =>{
    try {
        const { data }: any = await api.fetchPosts()

        dispatch({ type: 'FETCH_ALL', posts: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post: object) => async (dispatch: any) =>{
    try {
        const { data }: any = await api.createPost(post)

        dispatch({ type: 'CREATE', posts: data})
    } catch (error) {
        console.log(error.message)
    }
}