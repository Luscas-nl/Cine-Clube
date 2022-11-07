import './Style.css'
import { useContext } from 'react'
import User from "../../../assets/images/UserProfile.jpg"
import { AuthGoogleContext } from '../../../contexts/authGoogle'
import { Link } from 'react-router-dom'


function UserSection(params) {
    const { user, signed } = useContext(AuthGoogleContext)
    const logUser = JSON.parse(user)
    console.log(logUser);

    if(signed){
        return(
            <div className="innerProfile">
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