import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import "./Style.css"

function Post(props) {

    const { userDB, signed } = useContext(AuthGoogleContext)

    if(signed){

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quam suscipit unde repellat! Accusamus ullam esse assumenda earum velit placeat nostrum, nisi officiis modi asperiores dolorum quidem nam suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat minus laboriosam illo similique placeat molestias mollitia. Nobis, iusto!</p>
                    </div>
                    <p className="postInfos">- {logDB.name}, @{logDB.nickname}</p>
                </div>
            </div>
        )
    }
}

export default Post