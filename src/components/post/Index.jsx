import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import "./Style.css"

function Post(props) {

    const { userDB, signed } = useContext(AuthGoogleContext)

    if(signed){

        const date = new Date();
        const logDB = JSON.parse(userDB)

        return(
            <div className="postInner">
                <div className="postImageBox">
                    <div className="postImageInner">
                        <img src={logDB.urlPhoto} alt="" />
                    </div>
                </div>

                <div className="textsInner">
                    <div className="postText">
                        <p>{props.cont}</p>
                    </div>
                    <p className="postInfos">- {logDB.name}, @{logDB.nickname}</p>
                </div>
            </div>
        )
    }
}

export default Post