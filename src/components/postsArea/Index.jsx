import './Style.css'
import Post from '../post/Index'

function PostsArea(props) {
    return(
        <div className="PostArea">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostsArea