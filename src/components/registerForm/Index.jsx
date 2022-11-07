import './Style.css'

function RegisterForm(props) {
    return(
        <form action="" className='register'>
            <p>Entrar Para o Clube</p>
            <div className="registerSection">
                <input type="email" name="Email" required placeholder='Email*'/>
                <input type="text" name="Nome" required placeholder='Nome*'/>
            </div>

            <div className="registerSection">
                <input type="text" name="Turma" required placeholder='Turma*'/>
                <input type="text" name="Turno" required placeholder='Turno*'/>
            </div>

            <div className="registerSection">
                <textarea name="Porque Entrar" id="" cols="30" rows="10" placeholder='Porque você deseja entrar no clube?'></textarea>
            </div>

            <button type='submit'>Enviar Formulário</button>
        </form>
    )
}

export default RegisterForm