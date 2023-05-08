import './Style.css'
import Post from '../post/Index'
import { useContext, useState, useEffect } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import WPost from '../wPost/Index'

function PostsArea(props) {

    const { signed, posts } = useContext(AuthGoogleContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (posts != null) {
            setLoading(false)
        }
    }, [posts])

    if (signed && !loading) {
        const objPosts = JSON.parse(JSON.stringify(posts))
        return (
            <div className="PostArea">
                <WPost />
                {objPosts.map(post => {
                    return (
                        <Post cont={post.cont} />
                    )
                })}
            </div>
        )
    } else{
        return (
            <div className="PostArea">
                <WPost/>
                <Post cont="Sem Resenhas Ainda X_x" />
            </div>
        )
    }
}

export default PostsArea
