import './Style.css'
import Post from '../post/Index'
import { useContext, useState, useEffect } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { typeOf } from 'react-is'

function PostsArea(props) {

    const { signed, posts } = useContext(AuthGoogleContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (posts !== null) {
            setLoading(false)
        }
    }, [posts])

    if (signed && !loading) {
        const objPosts = JSON.parse(JSON.stringify(posts))
        console.log(objPosts)
        return (
            <div className="PostArea">
                {objPosts.map(post => {
                return (
                    <Post cont={post.cont} />
                )
                })}
            </div>
        )
    } else {
        return null // renderiza nada enquanto não tiver posts definidos
    }
}

export default PostsArea
