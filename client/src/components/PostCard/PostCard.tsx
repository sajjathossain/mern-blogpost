import { AiFillLike } from 'react-icons/ai'
import { FaBookReader } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import classes from './PostCard.module.scss'
import { likePost } from '../../actions/posts'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const PostCard = ({ post }: any) => {
    const [updatedPost, setUpdatedPost] = useState({...post})
    const dispatch = useDispatch()

    const handleLike = () => {
        setUpdatedPost({...updatedPost, likeCount: updatedPost.likeCount + 1})
        dispatch(likePost(updatedPost._id))
    }
    
    return (
        <div className={classes.card} key={post._id}>
            <div className={classes.cardContainer}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        <div className={classes.text}>
                            {updatedPost.title}
                        </div>
                    </div>
                    <div className={classes.date}>
                        <strong>Created: </strong>
                        {updatedPost.createdAt ? <Moment  date={new Date(updatedPost.createdAt)} format={"DD/MM/YYYY"} /> : 'unknown'}
                    </div>
                </div>
                <div className={classes.extra}>
                    <Link to={{
                        'pathname': `/post/${updatedPost._id}`,
                        'state': updatedPost
                        }}  className={classes.btn}>
                        <FaBookReader />
                    </Link>

                    <div id={`${updatedPost._id}`} className={classes.btn} onClick={handleLike}>
                        {updatedPost.likeCount} <AiFillLike onClick={handleLike} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
