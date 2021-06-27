import {Link} from 'react-router-dom'
import classes from './Posts.module.scss'
import { useSelector } from 'react-redux'

const Posts = () => {
    const postData = useSelector((state: { postReducers: any }) => state.postReducers)

    console.log(postData)
    
    return (
        <>
            {
                !postData ? <h1>Loading</h1> :
                    <div className={classes.container}>
                    {
                        postData.map((post: any) => (
                            <div className={classes.card} key={post._id}>
                                <div className={classes.cardContainer}>
                                    <div className={classes.header}>
                                        <div className={classes.title}>
                                            <div className={classes.text}>
                                                {post.title}
                                                <sup className={classes.tags}>
                                                    {post.tags} 
                                                </sup>
                                            </div>
                                        </div>
                                        <div className={classes.date}>
                                            {post.createdAt}
                                        </div>
                                    </div>
                                    <div className={classes.extra}>
                                        <Link to={`/posts/${post._id}`} className={classes.btn}>Read more!</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
}

export default Posts
