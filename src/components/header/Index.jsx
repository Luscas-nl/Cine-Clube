import './Style.css'
import UserSection from './userSection/Index'

function Header(props) {

    return(
        <div className='Header'>
            <div className="headerLeft">
                <a href="#" className='HeaderName'>Cineclube.</a>

                <div className="headerButtons">
                    <a href="#">Home</a>
                    <a href="#about">Sobre Nós</a>
                    <a href="#movie">Filme</a>
                    <a href="#team">Equipe</a>
                    <a href="#">Contato</a>
                </div>
            </div>

            <UserSection />

        </div>
    )
}

export default Header