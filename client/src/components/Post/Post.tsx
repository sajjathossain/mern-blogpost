import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

const Post = () => {
    const params: any = useParams()
    const postData = useSelector((state: { postReducers: any }) => state.postReducers)
    const [post, setPost] = useState({})
    useEffect(() => {
        const fetchPost = async () => {
            await setPost(postData.find((value: any) => value._id === params.id))
        }

        fetchPost()
        console.log(post)
    }, [params._id])

    return (
        <div>
            <h1>This is Post</h1>
            <Link to="/">Back</Link>
        </div>
    )
}

export default Post
