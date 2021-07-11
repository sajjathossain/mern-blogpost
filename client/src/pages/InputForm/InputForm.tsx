import { Link, useLocation } from 'react-router-dom'
import { createPost, getPosts, updatePost } from '../../actions/posts'
import { useEffect, useState } from 'react'

import { IoCaretBackOutline } from 'react-icons/io5'
import MDEditor from '@uiw/react-md-editor';
import classes from './InputForm.module.scss'
import { useDispatch } from 'react-redux'

interface Props {
    title: string,
    tags: string,
    message?: string
}

const InputForm = (props: Props) => {
    const blog:any = useLocation().state
    const [postData, setPostData] = useState({
        title: '',
        tags: '',
        message: ""
    })
    const [editing, setEditing] = useState(true)

    const dispatch = useDispatch()

    const handleSubmit = (e: any) => { 
        e.preventDefault()

        if(blog._id) {
            dispatch(updatePost(blog._id, postData))
            blog._id = null
        } else {
            dispatch(createPost(postData))
        }
        dispatch(getPosts())
        setPostData({ title: '', tags: '', message: ''})
    }

    const toggleView = () => { 
        setEditing(!editing)
    }

    useEffect(() => {
        // setEditing(editing)
        if(blog) {
            setPostData({ title: blog.title, tags: blog.tags, message: blog.message })
        }
        console.log(blog)
    }, [blog])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.text}>
                    <Link to={'/'} className={classes.hLink}>
                        <IoCaretBackOutline />
                        Home
                    </Link>
                </div>
                <div className={classes.switcher}>
                    <button type="button" className={`${classes.btn} ${editing ? `${classes.active}` : ''}`} onClick={() => toggleView()}>Edit</button>
                    <button type="button" className={`${classes.btn} ${!editing ? `${classes.active}` : ''}`} onClick={() => toggleView()}>Preview</button>
                </div> 
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter title*" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} required/>
                </div>
                
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter tags [tag1 tag2]" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} required/>
                </div>

                <div className={`${classes.markdown}`}>
                    <textarea className={classes.textarea} style={{ display: editing ? 'block' : 'none' }} placeholder="Enter text" onChange={(e) => setPostData({...postData, message: e.target.value})} value={postData.message}/>
                    <MDEditor.Markdown source={postData.message} className={`${editing ? classes.editorPrev : classes.markdownPrev}`}/>
                </div>

                <div className={classes.formGroup}>
                    <input type="submit" className={classes.submitBtn} value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default InputForm
