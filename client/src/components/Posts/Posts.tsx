import { useEffect, useState } from 'react'

import Post from './Post/Post'
import {Route} from 'react-router-dom'
import classes from './Posts.module.scss'

interface Props {
    posts: {
        msg: string,
        posts: any
    }
}

const Posts = (props: Props) => {
    const [data, setData]: any = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                await setData(props.posts.posts)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [isLoading])
    console.log(data)
    return (
        <>
            {
                isLoading === true || data === null ? <h1>Loading</h1> : 
                <div className={classes.container}>
                    {
                        data.map((post: any) => {
                            return (
                                <div className="card" key={post._id}>
                                    <div className="cardTitle">
                                        {post.title}
                                    </div>
                                    <div className="createdAt">
                                        {post.createdAt}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            } 
            <Route path="/post/:id" component={Post} exact={true} />
        </>
    )
}

export default Posts
