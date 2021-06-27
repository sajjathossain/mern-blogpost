import { useParams } from 'react-router-dom'
const Post = () => {
    const params = useParams()
    console.log('params', params)
    return (
        <div>
            <h1>This is Post</h1>
        </div>
    )
}

export default Post
