import { useEffect, useState } from 'react'

import MDEditor from '@uiw/react-md-editor';
import classes from './InputForm.module.scss'
import { createPost } from '../../actions/posts'
// import marked from 'marked';
import { useDispatch } from 'react-redux'

interface Props {
    title: string,
    tags: string,
    message?: string
}

const InputForm = (props: Props) => {
    const [postData, setPostData] = useState({
        title: '',
        tags: '',
        message: ""
    })
    const [editing, setEditing] = useState(true)

    const dispatch = useDispatch()

    const handleSubmit = (e: any) => { 
        e.preventDefault()

        dispatch(createPost(postData))
        setPostData({ title: '', tags: '', message: ''})
        window.alert('Post Created')
    }

    const toggleView = () => { 
        setEditing(!editing)
    }

    // const getMarkdownText = () => {
    //     let rawMarkup = marked(postData.message, {sanitize: false});
    //     return { __html: rawMarkup };
    // }

    useEffect(() => {
        setEditing(editing)
    }, [editing])

    console.log(editing)

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.text}>Let's Post!</div>
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
                    <textarea className={classes.textarea} placeholder="Enter text" onChange={(e) => setPostData({...postData, message: e.target.value})} value={postData.message}/>
                    <MDEditor.Markdown source={postData.message} className={`${editing ? classes.editorPrev : classes.markdownPrev}`}/>
                    {/* <div className={`${editing ? classes.editorPrev : classes.markdownPrev}`} dangerouslySetInnerHTML={getMarkdownText()} /> */}
                </div>

                <div className={classes.formGroup}>
                    <input type="submit" className={classes.submitBtn} value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default InputForm
