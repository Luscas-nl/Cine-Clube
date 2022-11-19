import './Style.css'
import UserSection from './userSection/Index'
import UserOptions from './userOptions/Index'
import { Link } from 'react-router-dom'

function Header(props) {

    return(
        <div className='Header'>
            <div className="headerLeft">
                <Link to="/" className='HeaderName'>Cineclube.</Link>

                <div className="headerButtons">
                    <Link to="/">Home</Link>
                    <a href="#about">Sobre Nós</a>
                    <a href="#movie">Filme</a>
                    <a href="#team">Equipe</a>
                    <a href="#">Contato</a>
                </div>
            </div>

            <UserSection />
            <UserOptions />

        </div>
    )
}

export default Header