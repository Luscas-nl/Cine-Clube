import './Style.css'
import { useContext } from 'react'
import User from "../../../assets/images/UserProfile.jpg"
import { AuthGoogleContext } from '../../../contexts/authGoogle'
import { Link } from 'react-router-dom'


function UserSection(params) {
    const { user, signed, userDB } = useContext(AuthGoogleContext)

    function hiddenOptions() {
        const op = document.querySelector(".uOptionsBox")
        const seta = document.querySelector(".setinha")
        op.classList.toggle("hidden")

        if(seta.classList.contains("fa-caret-down")){
            seta.classList.remove("fa-caret-down")
            seta.classList.add("fa-caret-up")
        } else {
            seta.classList.remove("fa-caret-up")
            seta.classList.add("fa-caret-down")
        }
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
                <div className="profileBox">
                    <div className="profileImgBox">
                        <img src={logDB.urlPhoto ?? img} alt="" />
                    </div>
                    <i className='fa fa-caret-down setinha' aria-hidden="true"></i>
                </div>
            </div>
        )
    } else {
        return <Link className='makeLogin' to="/login" >Fazer Login</Link>
    }
}

export default UserSection