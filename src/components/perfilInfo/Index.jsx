import './Style.css'
import Capa from "../../assets/images/CineCapa.png"
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'
import User from "../../assets/images/UserProfile.jpg"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../../services/firebaseConfig'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'

function PerfilInfo(props) {

    const [progress, setProgress] = useState(0)
    const [imgURl, setImgURL] = useState(null)
    const [newName, setNewName] = useState("")
    const [newNick, setNewNick] = useState("")
    const [newDesc, setNewDesc] = useState("")
    

    const { user, userDB, signed, AtualizeData } = useContext(AuthGoogleContext)

    if(signed){

        const logUser = JSON.parse(user)
        const logDB = JSON.parse(userDB)
        var desc

        if(logDB.desc == ""){
            desc = "Sem descrição ainda! :( Digite uma resenha de filme ou um pouco sobre você. ps: qualquer coisa aleatoria também vale."
        } else {
            desc = logDB.desc
        }

        const HandleUpload = (e) => {
            e.preventDefault()

            const file = e.target[0]?.files[0]
            if(!file) return;

            const storafeRef = ref(storage, `${logUser.email}/perfil`)
            const uploadTask = uploadBytesResumable(storafeRef, file)

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setProgress(progress)
                },
                error => {
                    alert(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(url => {
                        const img = document.querySelector(".perfilIMG")
                        img.setAttribute("src", url)
                        setImgURL(url)
                    })
                }
            )
        }

        function UploadNewData(){
            if(!imgURl && !newName && !newNick && !newDesc){
                alert("Nenhum Campo Foi Preenchido")
            } else {
                UpdateData()
            }
        }

        function AlterHidden(){
            const itens = document.querySelectorAll(".alter")
            const buttonAlter = document.querySelector(".buttonAlter")
            const inputs = document.querySelectorAll(".inputAlter")
            const img = document.querySelector(".perfilIMG")
            const button = document.querySelector("#buttonImgSave")
            const desc = document.querySelector(".descInput")

            button.setAttribute("disabled", "")
            setImgURL(null)
            
            img.setAttribute("src", logDB.urlPhoto ?? logUser.photoURL ?? User)

            itens.forEach((item) => {
                item.classList.toggle("hidden")
                if(item.classList.contains("hidden")){
                    buttonAlter.innerHTML = "Alterar"
                } else {
                    buttonAlter.innerHTML = "Cancelar"
                }
            })

            inputs.forEach((input) => {
                input.value = ""
            })
        }

        function PerfilNameAlter(){
            const button = document.querySelector("#buttonImgSave")
            button.removeAttribute("disabled")
        }

        async function UpdateData(){ 
            const dataRef = doc(db, "users", logUser.email)
            var name = logDB.name
            var nickname = logDB.nickname
            var desc = logDB.desc

            if(newName != ""){
                name = newName
            }

            if(newNick != ""){
                nickname = newNick
            }

            if(newDesc != ""){
                desc = newDesc
            }

            await updateDoc(dataRef, {
                nickname: nickname,
                name: name,
                urlPhoto: imgURl ?? logDB.urlPhoto,
                desc: desc
            })
            AtualizeData()

            const itens = document.querySelectorAll(".alter")
            const buttonAlter = document.querySelector(".buttonAlter")
            const inputs = document.querySelectorAll(".inputAlter")
            const img = document.querySelector(".perfilIMG")
            const button = document.querySelector("#buttonImgSave")
            button.setAttribute("disabled", "")
            setImgURL(null)

            setNewName("")
            setNewNick("")
            setNewDesc("")
            
            img.setAttribute("src", logDB.urlPhoto ?? logUser.photoURL ?? User)

            itens.forEach((item) => {
                item.classList.toggle("hidden")
                if(item.classList.contains("hidden")){
                    buttonAlter.innerHTML = "Alterar"
                } else {
                    buttonAlter.innerHTML = "Cancelar"
                }
            })

            inputs.forEach((input) => {
                input.value = ""
            })
        }

        return(
            <div className='perfilInner'>

                <div className="perfilBox">
                    <div className="personImg">
                        <img className='perfilIMG' src={logDB.urlPhoto ?? logUser.photoURL ?? User} alt="" />
                        <form className='altImageBox alter hidden' onSubmit={HandleUpload}>
                            <input id="setImage" type="file" accept="image/png, image/jpeg"/>
                            <label onClick={PerfilNameAlter} className='filePerfil' htmlFor="setImage">Escolher Imagem</label>
                            <button id='buttonImgSave' type="submit" disabled>Enviar</button>
                        </form>
                    </div>

                    <div className="namePerfil alter">
                        <p className='userPerfilName'>{logDB.name ?? logUser.displayName}</p>
                        <p className='userPerfilNick'>@{logDB.nickname ?? "Neki.nl"}</p>
                    </div>
                </div>

                <div className="descPerfilArea alter">
                    <p className="userPerfilDesc">{desc}</p>
                </div>

                <div className="nameAlterBox alter hidden">
                    <input className='inputAlter' value={newName} onChange={(e) => setNewName(e.target.value)} type="text" placeholder={logDB.name}/>
                    <div className="arrobaBox">
                        <div className="arrobaDiv">
                            <i className='fa fa-at' aria-hidden="true"></i>
                        </div>
                        <input className='inputAlter alterNick' value={newNick} onChange={(e) => setNewNick(e.target.value)}  type="text" placeholder={logDB.nickname} />
                    </div>
                    <textarea className='descInput' value={newDesc} onChange={(e) => setNewDesc(e.target.value)} cols="30" rows="10" placeholder='Descrição'></textarea>
                </div>

                

                <div className="buttonsPerfil">
                    <button className='buttonAlter' onClick={AlterHidden}>Alterar</button>
                    <button onClick={UploadNewData} className="buttonSavePerfil alter hidden">Salvar</button>
                </div>
            </div>
        )
    }
}

export default PerfilInfo