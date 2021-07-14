import PostCard from '../PostCard/PostCard'
// * Component Imports
import SearchBar from '../SearchBar/SearchBar'
import classes from './Posts.module.scss'
import { useSelector } from 'react-redux'

const Posts = () => {
    const postData = useSelector((state: { postReducers: any }) => state.postReducers)
    
    return (
        <div className={classes.container}>
            <SearchBar />
            <div className={classes.contents}>
            {
                !postData ? <h1>Loading</h1> :
                <div className={classes.postsContainer}>
                    {
                        postData.map((post: any) => (
                           <PostCard key={post._id} post={post} /> 
                        ))
                    }
                </div>
            }
            </div>
        </div>
    )
}

export default Posts
