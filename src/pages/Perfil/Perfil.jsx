import './Style.css'
import PerfilInfo from '../../components/perfilInfo/Index'
import Header from '../../components/header/Index'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import { Navigate } from 'react-router-dom'
import PostsArea from '../../components/postsArea/Index'
import EmblemArea from '../../components/emblemArea'

function Perfil(props) {

    const { signed } = useContext(AuthGoogleContext)

    if(signed){
        return(
            <div className='Perfil'>
                <Header />
                <PerfilInfo />
                <PostsArea />
            </div>
        )
    } else {
        return <Navigate to="/login" />
    }
}

export default Perfil