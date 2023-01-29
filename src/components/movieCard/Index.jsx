import './Style.css'
import Filme from '../../assets/images/Filme.jpg'


function MovieCard(props) {
    return(
        <div className="movieCardBox">
            <div className="movieCard">
                <div className="imgMovieBox">
                    <img src={Filme} alt="" />
                </div>

                <div className="infoMovie">
                    <p className="name">A Origem dos Guardiões</p>
                    <p className="about">2012 - Animação/Fantasia - 97min</p>
                    <p className="sinopse">Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>
                </div>

                <p className="instru">Passe o mouse em cima</p>
            </div>
        </div>
    )
}

export default MovieCard