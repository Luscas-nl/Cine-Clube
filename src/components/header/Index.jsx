import './Style.css'

function Header(props) {
    return(
        <div className='Header'>
            <a href="#" className='HeaderName'>Cineclube.</a>

            <div className="headerButtons">
                <a href="#">Home</a>
                <a href="#about">Sobre Nós</a>
                <a href="#movie">Filme</a>
                <a href="#">Equipe</a>
                <a href="#">Contato</a>
            </div>
        </div>
    )
}

export default Header