import { AiFillLike, AiTwotoneDelete } from 'react-icons/ai';
import { FaCaretSquareLeft, FaPencilRuler } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import MDEditor from '@uiw/react-md-editor';
import Moment from 'react-moment';
import classes from './Post.module.scss'

const Post = () => {
    let blog:any = useLocation().state

    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <Link to="/" className={classes.link}>
                    <FaCaretSquareLeft /> Go Back
                </Link>
                <span className={classes.date}>
                    <>
                        <Link to="/like" className={classes.btn}>
                            {blog.likeCount} <AiFillLike /> 
                        </Link>
                        
                        <Link to={{
                            'pathname': `/form/${blog._id}`,
                            'state': blog
                        }} className={classes.btn}>
                            <FaPencilRuler /> 
                        </Link>

                        <Link to="/delete" className={`${classes.btn} ${classes.deleteBtn}`}>
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
