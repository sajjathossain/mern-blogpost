import { Link, useLocation } from 'react-router-dom'

import { FaCaretSquareLeft } from 'react-icons/fa'
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
                    {blog.createdAt ? <Moment date={new Date(blog.createdAt)} format="dd - DD/MM/YYYY - HH:mm a" /> : 'unknown'}
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
