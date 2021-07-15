import { useDispatch, useSelector } from 'react-redux'

import PostCard from '../PostCard/PostCard'
// * Component Imports
import SearchBar from '../SearchBar/SearchBar'
import classes from './Posts.module.scss'
import { getPosts } from '../../actions/posts'
import { useEffect } from 'react'

const Posts = () => {
    const postData = useSelector((state: { postReducers: any }) => state.postReducers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
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
