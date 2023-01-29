import './Style.css'
import UserSection from './userSection/Index'
import UserOptions from './userOptions/Index'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/authGoogle'

function Header(props) {

    const { signed } = useContext(AuthGoogleContext)

    function scrollAlter(){
        const header = document.querySelector(".Header")
        const buttons = document.querySelector(".headerButtons")

        if(document.documentElement.scrollTop >= 200){
            header.classList.add("scroll")
            buttons.classList.add("scroll")
        } else {
            buttons.classList.remove("scroll")
            header.classList.remove("scroll")
        }
    }

    window.onscroll = (scrollAlter)

    if(!signed)
    {
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
    } else {
        return(
            <div className='Header'>
                <div className="headerLeft">
                    <Link to="/" className='HeaderName'>Cineclube.</Link>
    
                    <div className="headerButtons">
                        <Link to="/">Home</Link>
                        <Link to="">Feed</Link>
                        <Link to="">Filmes</Link>
                    </div>
                </div>
    
                <UserSection />
                <UserOptions />
    
            </div>
        )
    }

    
}

export default Header