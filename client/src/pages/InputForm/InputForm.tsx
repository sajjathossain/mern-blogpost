import classes from './InputForm.module.scss'
import { createPost } from '../../actions/posts'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

interface Props {
    title: string,
    tags: string,
    message: string
}

const InputForm = (props: Props) => {
    const [postData, setPostData] = useState({
        title: '',
        tags: '',
        message: ''
    })
    const dispatch = useDispatch()

    const handleSubmit = (e: any) => { 
        e.preventDefault()

        dispatch(createPost(postData))
    }

    return (
        <div className={classes.container}>
            {/* <h1 className={classes.header}>Let's post and teach others!</h1> */}
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter title*" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} required/>
                </div>
                
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter tags [tag1 tag2]" value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} required/>
                </div>

                <div className={classes.formGroup}>
                    <textarea name="message" className={classes.textarea} placeholder="Enter message*" value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} required/>
                </div>

                <div className={classes.formGroup}>
                    <input type="submit" className={classes.submitBtn} value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default InputForm
