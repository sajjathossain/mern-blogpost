import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Posts from "../../components/Posts/Posts";
import { getPosts } from '../../actions/posts'

function Home(){
    const [data, setData]: any = useState()
    const posts = useSelector((state: { postReducers: any }) => state.postReducers)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetch = async () => {
            try{
                await dispatch(getPosts())
                await setData(posts)
            } catch(err) {
                console.error(err)
            }
        }

        fetch()
    }, [dispatch, posts])

    return (
        <div>
            <Posts posts={data.posts}/>
        </div>
    )
}

export default Home
