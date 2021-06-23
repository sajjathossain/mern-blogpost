import classes from './InputForm.module.scss'

interface Props {
    title: string,
    tags: string,
    message: string
}

const InputForm = (props: Props) => {
    return (
        <div className={classes.container}>
            {/* <h1 className={classes.header}>Let's post and teach others!</h1> */}
            <form className={classes.form}>
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter title*" required/>
                </div>
                
                <div className={classes.formGroup}>
                    <input type="text" name="title" placeholder="Enter tags [tag1 tag2]" required/>
                </div>

                <div className={classes.formGroup}>
                    <textarea name="message" className={classes.textarea} placeholder="Enter message*" required/>
                </div>

                <div className={classes.formGroup}>
                    <button type="submit" className={classes.submitBtn}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm
