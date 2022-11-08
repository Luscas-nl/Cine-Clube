import './Style.css'
import { useContext } from 'react'
import User from "../../../assets/images/UserProfile.jpg"
import { AuthGoogleContext } from '../../../contexts/authGoogle'
import { Link } from 'react-router-dom'


function UserSection(params) {
    const { user, signed } = useContext(AuthGoogleContext)
    const logUser = JSON.parse(user)
    console.log(logUser);

    function hiddenOptions() {
        const op = document.querySelector(".uOptionsBox")
        op.classList.toggle("hidden")
    }

    if(signed){
        return(
            <div className="innerProfile" onClick={hiddenOptions}>
                <p className="userName">{logUser.displayName}</p>
                <div className="profileBox">
                    <img src={User} alt="" />
                </div>
            </div>
        )
    } else {
        return <Link className='makeLogin' to="/login" >Fazer Login</Link>
    }
}

export default UserSection