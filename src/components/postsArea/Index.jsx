import './Style.css'
import Post from '../post/Index'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { typeOf } from 'react-is'

function PostsArea(props) {

    const { posts, signed } = useContext(AuthGoogleContext)

    if(signed){
        return(
            <div className="PostArea">
            </div>
        )
    }
}

export default PostsArea