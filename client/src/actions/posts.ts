import * as api from '../api'

export const getPosts = () => async (dispatch: any) =>{
    try {
        const { data }: any = await api.fetchPosts()
        console.log(data)
        await dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post: object) => async (dispatch: any) =>{
    try {
        const { data }: any = await api.createPost(post)

        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}