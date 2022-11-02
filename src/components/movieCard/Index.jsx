import './Style.css'
import Psicose from '../../assets/images/Psicose.jpg'


function MovieCard(props) {
    return(
        <div className="movieCardBox">
            <div className="movieCard">
                <div className="imgMovieBox">
                    <img src={Psicose} alt="" />
                </div>

                <div className="infoMovie">
                    <p className="name">Psicose</p>
                    <p className="about">1960 - Terror/Thriller - 109min</p>
                    <p className="sinopse">Uma mulher rouba uma fortuna de um homem milionário e entra em uma fuga, paranoica em ser pega, o desconforto é transmitido na trama, até ela eventualmente conhecer um sujeito dono de um hotel um tanto que suspeito.</p>
                </div>

                <p className="instru">Passe o mouse em cima</p>
            </div>
        </div>
    )
}

export default MovieCard