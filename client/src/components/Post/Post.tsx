import { AiFillLike, AiTwotoneDelete } from 'react-icons/ai';
import { FaCaretSquareLeft, FaPencilRuler } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { deletePost, likePost } from '../../actions/posts';

import MDEditor from '@uiw/react-md-editor';
import Moment from 'react-moment';
import classes from './Post.module.scss'
import { useDispatch } from 'react-redux';

const Post = () => {
    let blog:any = useLocation().state
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deletePost(blog._id))
    }

    /* -------------------------------------------------------------------------- */
    /*                       TODO Solve error of liking post                      */
    /* -------------------------------------------------------------------------- */
    const handleLike = () => {
        dispatch(likePost(blog._id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Link to="/" className={classes.link}>
                    <FaCaretSquareLeft /> Home
                </Link>
                <span className={classes.date}>
                    <>
                        <Link to="" className={classes.btn} onClick={handleLike}>
                            {blog.likeCount} <AiFillLike /> 
                        </Link>
                        
                        <Link to={{
                            'pathname': `/form/${blog._id}`,
                            'state': blog
                        }} className={classes.btn}>
                            <FaPencilRuler /> 
                        </Link>

                        <Link to={`/`} className={`${classes.btn} ${classes.deleteBtn}`} onClick={handleDelete}>
                            <AiTwotoneDelete />
                        </Link>
                    </>
                    <div className={classes.dText}>
                        {blog.createdAt ? <Moment date={new Date(blog.createdAt)} format="dd - DD/MM/YYYY - HH:mm a" /> : 'unknown'}
                    </div>
                </span>
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    <div className={classes.text}>{blog.title}</div>
                     <div className={classes.tags}>
                        {
                            blog.tags.map((tag: string, index: number) => {
                                return <div className={classes.tag} key={index}>{tag}</div>
                            })
                        }
                    </div>
                </div>
                <div className={classes.render}>
                    <MDEditor.Markdown source={blog.message} className={classes.markdown} />
                </div>
            </div>
        </div>
    )
}

export default Post
