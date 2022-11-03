import { useState } from 'react'
import carr1 from './assets/images/DarthVader.jpg'
import './App.css'
import Header from './components/header/Index'
import InfoCard from './components/infoCard/Index'
import MovieCard from './components/movieCard/Index'
import RegisterForm from './components/registerForm/Indesx'

function App() {

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
    <div className="App">
      <Header />
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

      <section id='about' className='about'>
        <InfoCard />
        <InfoCard color="white" title="Como Funciona?" desc="Todo mês nós temos duas reuniões em uma Sexta-feira, uma no turno da manhã e a outra na da tarde, sobre um filme escolhido previamente. O tema e a data serão sempre exibidos neste site, então não precisam ficar preocupados em ficarem desinformados."/>
        <InfoCard title="Proxima Reunião" desc="Nossa próxima reunião é Sexta-feira, 25/11, sobre o filme Psicose (1960), do Alfred Hitchcock, nos horários da manhã de 11h até 12h, e de tarde, de 13h até 14h."/>
      </section>

      <section id='movie' className='movie'>
        <MovieCard />
      </section>
    </div>
  )
}

export default App
