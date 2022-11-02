import './Style.css'

function InfoCard(props) {
    return(
        <div className='infoCard' color={props.color ?? "black"}>
            <h2 className='cardTitle'>{props.title ?? "Quem Somos?"}</h2>
            <p>{props.desc ?? "Nós somos o Cineclube, o clube oficial de cinema do IFAL! Nós fomos fundados na pandemia pela aluna Talita Raquel, onde fizemos inúmeros encontros virtuais, e agora continuamos presencialmente o clube sob a liderança do aluno Fernando Jorge, uma vez que a líder se formou."}</p>
        </div>
    )
}

export default InfoCard