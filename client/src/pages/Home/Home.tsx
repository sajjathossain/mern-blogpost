import Posts from "../../components/Posts/Posts";
import classes from './Home.module.scss'
import { useSelector } from 'react-redux'

function Home(){
    const posts = useSelector((state: { postReducers: any }) => state.postReducers)
    
    return (
        <div className={classes.container}>
            <Posts posts={posts}/>
        </div>
    )
}

export default Home
