import './Style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../../contexts/authGoogle'

function UserOptions(props) {

    const { logOff } = useContext(AuthGoogleContext)

    return(
        <div className="uOptionsBox hidden">
            <div className="uOptions">
                <Link to="/perfil">Meu Perfil</Link>
                <span className="lineUOptions"></span>
                <Link to="/">Meus Emblemas</Link>
                <span className="lineUOptions"></span>
                <Link to="/">Resenhas</Link>
                <span className="lineUOptions"></span>
                <a onClick={logOff}><span className='loggofButton'>Sair</span></a>
            </div>
        </div>
    )
}

export default UserOptions