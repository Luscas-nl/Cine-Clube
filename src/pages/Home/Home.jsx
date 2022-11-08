import { members } from '../../jsons/team.json'
import carr1 from '../../assets/images/DarthVader.jpg'
import './Style.css'
import Header from '../../components/header/Index'
import InfoCard from '../../components/infoCard/Index'
import MovieCard from '../../components/movieCard/Index'
import RegisterForm from '../../components/registerForm/Index'
import TeamCard from '../../components/teamCard/Index'
import Carousel from 'react-elastic-carousel'

function Home() {

    function JoinClub(){
        const form = document.querySelector(".formRegister")
        const button = document.querySelector(".joinCineButton")
        
        if(form.classList.contains("hidden")){
        form.classList.remove("hidden")
        button.innerHTML = "Cancelar inscrição"
        } else {
        form.classList.add("hidden")
        button.innerHTML = "Junte-se ao clube"
        }
    }

    return (
        <div className="Home">
            <Header />

            {/* === SEÇÃO HOME === */}
            <section id='home' className='homeCarrossel'>
                <img src={carr1} alt="" />

                <div className="homeText">
                    <p>As portas do mundo cinematográfico estão abertas para você, conheça pessoas com o mesmo amor e paixão pelo cinema.</p>
                    <button onClick={JoinClub} className="joinCineButton">Junte-se ao clube</button>
                </div>

                <div className="formRegister hidden">
                    <RegisterForm />
                </div>
            </section>

            {/* === SEÇÃO SOBRE === */}
            <section id='about' className='about'>
                <InfoCard />
                <InfoCard color="white" title="Como Funciona?" desc="Todo mês nós temos duas reuniões em uma Sexta-feira, uma no turno da manhã e a outra na da tarde, sobre um filme escolhido previamente. O tema e a data serão sempre exibidos neste site, então não precisam ficar preocupados em ficarem desinformados."/>
                <InfoCard title="Proxima Reunião" desc="Nossa próxima reunião é Sexta-feira, 25/11, sobre o filme Psicose (1960), do Alfred Hitchcock, nos horários da manhã de 11h até 12h, e de tarde, de 13h até 14h."/>
            </section>

            {/* === SEÇÃO FILME === */}
            <section id='movie' className='movie'>
                <MovieCard />
            </section>

            {/* === SEÇÃO TEAM === */}
            <section id='team' className='team'>
                <p className='teamTitle'>Nossa Equipe</p>
                <Carousel itemsToShow={2} showArrows={false}>
                    {members.map((member) => {
                    return <TeamCard  name={member.name} function={member.function} desc={member.desc} image={member.image} />
                    })}
                </Carousel>
            </section>
        </div>
    )
}

export default Home
