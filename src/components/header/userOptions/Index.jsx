import './Style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../../contexts/authGoogle'

function UserOptions(props) {

    const { logOff } = useContext(AuthGoogleContext)
    const { user, signed ,userDB } = useContext(AuthGoogleContext)

    if(signed){

        const logUser = JSON.parse(user)
        const logDB = JSON.parse(userDB)

        var strg = logUser.displayName
        var firstName = strg?.split(' ')[0];
        var nickname

        if(logDB.nickname == "" || logDB.nickname == null){
            nickname = firstName
        } else {
            nickname = logDB.nickname
        }

        return(
            <div className="uOptionsBox hidden">
                <div className="uOptions">
                    <div className="informationsUser">
                        <div className="imgInformationBox">
                            <img src={logDB.urlPhoto ?? logUser.photoURL} alt="" className="imgInformation" />
                        </div>
                        <div className="namesInformationBox">
                            <p className="nameInformations">
                                {firstName}
                            </p>
                            <p className="nickInformations">
                                @{logDB.nickname}
                            </p>
                        </div>
                    </div>
                    <div className="linksUser">
                        <Link to="/perfil">Perfil</Link>
                        <Link >Emblemas</Link>
                        <p onClick={logOff} className='closeButton'>Sair</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserOptions