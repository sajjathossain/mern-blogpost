import {Route, Switch} from 'react-router-dom'

import React from 'react';
import classes from './Home.module.scss'

const Post = React.lazy(() => import("../../components/Post/Post"))
const Posts = React.lazy(() => import("../../components/Posts/Posts"))

function Home(){ 
    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/" exact={true} component={Posts} />
                <Route path="/post/:id" component={Post} exact={true} />
            </Switch>
        </div>
    )
}

export default Home
