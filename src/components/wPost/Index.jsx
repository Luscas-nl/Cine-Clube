import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import "./Style.css"



function WPost(props) {

    const { userDB, signed } = useContext(AuthGoogleContext)

    const logDB = JSON.parse(userDB)

    function autoResize(el){
        el.rows = 1; // Define a quantidade inicial de linhas para 1
        while (el.scrollHeight > el.offsetHeight){
          el.rows += 1; // Adiciona linhas até que o conteúdo caiba dentro da textarea
        }
        if (el.value === '') {
          el.rows = 1; // Volta para a quantidade inicial de linhas caso o conteúdo seja apagado
        }
    }

    if(signed){
        return(
            <div className="wPostArea">
                <div className="photoBox">
                    <div className="photoPostInner">
                        <img src={logDB.urlPhoto} alt="" />
                    </div>
                </div>
                <div className="WArea">
                    <textarea className="textAreaPost" id="" rows="1" cols="52" placeholder="Qual a resenha?" onKeyUp={(event) => autoResize(event.target)}></textarea>
                    <div className="optionsPostArea">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default WPost