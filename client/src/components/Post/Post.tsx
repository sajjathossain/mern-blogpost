import { AiFillLike, AiTwotoneDelete } from 'react-icons/ai';
import { FaCaretSquareLeft, FaPencilRuler } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { deletePost, likePost } from '../../actions/posts';

import MDEditor from '@uiw/react-md-editor';
import Moment from 'react-moment';
import classes from './Post.module.scss'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Post = () => {
    let blog:any = useLocation().state
    const [updatedPost, setUpdatedPost] = useState({...blog})
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deletePost(updatedPost._id))
    }

    /* -------------------------------------------------------------------------- */
    /*                       NOTE Solve error of liking post                      */
    /* -------------------------------------------------------------------------- */
    const handleLike = () => {
        setUpdatedPost({...updatedPost, likeCount: updatedPost.likeCount + 1})
        dispatch(likePost(updatedPost._id))
    }

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Link to="/" className={classes.link}>
                    <FaCaretSquareLeft /> Home
                </Link>
                <span className={classes.date}>
                    <>
                        <div className={classes.btn} onClick={handleLike}>
                            {updatedPost.likeCount} <AiFillLike onClick={handleLike} /> 
                        </div>
                        
                        <Link to={{
                            'pathname': `/form/${updatedPost._id}`,
                            'state': updatedPost
                        }} className={classes.btn}>
                            <FaPencilRuler /> 
                        </Link>

                        <Link to={`/`} className={`${classes.btn} ${classes.deleteBtn}`} onClick={handleDelete}>
                            <AiTwotoneDelete />
                        </Link>
                    </>
                    <div className={classes.dText}>
                        {blog.createdAt ? <Moment date={new Date(updatedPost.createdAt)} format="dd - DD/MM/YYYY - HH:mm a" /> : 'unknown'}
                    </div>
                </span>
            </div>
            <div className={classes.content}>
                <div className={classes.title}>
                    <div className={classes.text}>{updatedPost.title}</div>
                     <div className={classes.tags}>
                        {
                            updatedPost.tags.map((tag: string, index: number) => {
                                return <div className={classes.tag} key={index}>{tag}</div>
                            })
                        }
                    </div>
                </div>
                <div className={classes.render}>
                    <MDEditor.Markdown source={updatedPost.message} className={classes.markdown} />
                </div>
            </div>
        </div>
    )
}

export default Post
