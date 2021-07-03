import {Route, Switch} from 'react-router-dom'

import Post from "../../components/Post/Post";
import Posts from "../../components/Posts/Posts";
import classes from './Home.module.scss'

function Home(){ 
    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/" component={Posts} exact={true} />
                <Route path="/post/:id" component={Post} exact={true} />
            </Switch>
        </div>
    )
}

export default Home
