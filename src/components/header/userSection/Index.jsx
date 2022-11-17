import './Style.css'
import { useContext } from 'react'
import User from "../../../assets/images/UserProfile.jpg"
import { AuthGoogleContext } from '../../../contexts/authGoogle'
import { Link } from 'react-router-dom'


function UserSection(params) {
    const { user, signed } = useContext(AuthGoogleContext)

    function hiddenOptions() {
        const op = document.querySelector(".uOptionsBox")
        op.classList.toggle("hidden")
    }

    if(signed){

        const logUser = JSON.parse(user)
        const img = logUser.photoURL
        var strg = logUser.displayName
        var firstName = strg?.split(' ')[0];

        return(
            <div className="innerProfile" onClick={hiddenOptions}>
                <p className="userName">{firstName}</p>
                <div className="profileBox">
                    <img src={img} alt="" />
                </div>
            </div>
        )
    } else {
        return <Link className='makeLogin' to="/login" >Fazer Login</Link>
    }
}

export default UserSection