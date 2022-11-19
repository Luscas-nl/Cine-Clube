import './Style.css'
import { useContext } from 'react'
import User from "../../../assets/images/UserProfile.jpg"
import { AuthGoogleContext } from '../../../contexts/authGoogle'
import { Link } from 'react-router-dom'


function UserSection(params) {
    const { user, signed, userDB } = useContext(AuthGoogleContext)

    function hiddenOptions() {
        const op = document.querySelector(".uOptionsBox")
        op.classList.toggle("hidden")
    }

    if(signed){

        const logUser = JSON.parse(user)
        const logDB = JSON.parse(userDB)
        const img = logUser.photoURL
        var strg = logUser.displayName
        var firstName = strg?.split(' ')[0];
        var nickname

        if(logDB.nickname == "" || logDB.nickname == null){
            nickname = firstName
        } else {
            nickname = logDB.nickname
        }

        return(
            <div className="innerProfile" onClick={hiddenOptions}>
                <p className="userName">{nickname}</p>
                <div className="profileBox">
                    <img src={logDB.urlPhoto ?? img} alt="" />
                </div>
            </div>
        )
    } else {
        return <Link className='makeLogin' to="/login" >Fazer Login</Link>
    }
}

export default UserSection