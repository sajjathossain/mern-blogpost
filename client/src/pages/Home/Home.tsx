import Post from "../../components/Post/Post";
import Posts from "../../components/Posts/Posts";
import {Route} from 'react-router-dom'
import classes from './Home.module.scss'

function Home(){
    
    return (
        <div className={classes.container}>
            <Route path="/" component={Posts} exact={true} />
            <Route path="/post/:id" component={Post} exact={true} />
        </div>
    )
}

export default Home
