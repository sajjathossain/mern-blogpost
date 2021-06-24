interface Props {
    posts: []
}

const Posts = (props: Props) => {
    console.log('posts', props)

    return (
        <div>
            <h1>Posts Go Here!</h1>
        </div>
    )
}

export default Posts
