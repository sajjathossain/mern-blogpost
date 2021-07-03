import { AiFillLike, AiTwotoneDelete } from 'react-icons/ai'

import { FaBookReader } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import classes from './Posts.module.scss'
import { useSelector } from 'react-redux'

const Posts = () => {
    const postData = useSelector((state: { postReducers: any }) => state.postReducers)

    console.log(postData)
    
    return (
        <div className={classes.container}>
            <div className={classes.searchBar}>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.contents}>
            {
                !postData ? <h1>Loading</h1> :
                    <div className={classes.postsContainer}>
                    {
                        postData.map((post: any) => (
                            <div className={classes.card} key={post._id}>
                                <div className={classes.cardContainer}>
                                    <div className={classes.header}>
                                        <div className={classes.title}>
                                            <div className={classes.text}>
                                                {post.title}
                                            </div>
                                        </div>
                                        {/* <div className={classes.date}>
                                            {post.createdAt}
                                        </div> */}
                                    </div>
                                    <div className={classes.extra}>
                                        <Link to={`/post/${post._id}`} className={classes.btn}>
                                            <FaBookReader />
                                        </Link>
                                        <Link to="/delete" className={classes.btn}>
                                            <AiTwotoneDelete />
                                        </Link>
                                        <Link to="/like" className={classes.btn}>
                                            {post.likeCount} <AiFillLike /> 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            </div>
        </div>
    )
}

export default Posts
