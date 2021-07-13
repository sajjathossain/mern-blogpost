import { AiFillLike } from 'react-icons/ai'
import { FaBookReader } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import classes from './PostCard.module.scss'

const PostCard = ({ post }: any) => {
    return (
        <div className={classes.card} key={post._id}>
            <div className={classes.cardContainer}>
                <div className={classes.header}>
                    <div className={classes.title}>
                        <div className={classes.text}>
                            {post.title}
                        </div>
                    </div>
                    <div className={classes.date}>
                        <strong>Created: </strong>
                        {post.createdAt ? <Moment  date={new Date(post.createdAt)} format={"DD/MM/YYYY"} /> : 'unknown'}
                    </div>
                </div>
                <div className={classes.extra}>
                    <Link to={{
                        'pathname': `/post/${post._id}`,
                        'state': post
                        }}  className={classes.btn}>
                        <FaBookReader />
                    </Link>

                    <Link to="/like" className={classes.btn}>
                        {post.likeCount} <AiFillLike /> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
