import Posts from "../../components/Posts/Posts";
import { useSelector } from 'react-redux'

function Home(){
    const posts = useSelector((state: { postReducers: any }) => state.postReducers)

    console.log(posts)
    return (
        <div>
            <Posts />
        </div>
    )
}

export default Home
