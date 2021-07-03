import * as api from '../api'

export const getPosts = () => async (dispatch: any) =>{
    try {
        const { data }: any = await api.fetchPosts()
        const sorted = [...data]
        sorted.sort((a: any, b: any) => {
            return b.likeCount - a.likeCount
        })
        console.log(data)
        console.log('sroted', sorted)
        await dispatch({ type: 'FETCH_ALL', payload: sorted})
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

// export const getPost = () => async (dispatch: any) => {
//     try {
//         const { data }: any = await api.getPost()

//         dispatch({ type: 'GET_POST', payload: data})
//     } catch (error) {
//         console.log(error.message)
//     }
// }