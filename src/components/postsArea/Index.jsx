import './Style.css'
import Post from '../post/Index'

function PostsArea(props) {
    return(
        <div className="PostArea">
            <Post cont="Nada contra quem gosta de filmes dublados, mas que porra irritante estar cada vez mais raro uma sessão com áudio original nos cinemas. Eu sempre gostei de ver o filme com o som original (exceto desenhos), aqui na minha cidade não tem UMA sessão legendada de filme algum."/>
            <Post cont="pela primeira vez, falei com sua mãe hoje. ela me contou de você, eu sorri quando ela me disse que você assistiu a aquele filme. estou orgulhosa de você!"/>
            <Post cont="shang-chi, no way home e pantera negra: wakanda forever é outra qualidade em comparação com o resto da fase 4 da marvel studios"/>
            <Post cont="É realmente diferente dos outros filmes da Marvel, é super pé no chão. Adoro que tenha tantas atrizes excelentes, é um filme realmente das mulheres e acho que não será o que as pessoas esperam."/>
            <Post cont="nao conheço um programador que nao seja calvo depois dos 25 é muito real essa história"/>
            <Post cont="FELIE NETO VOLTOU!!!"/>
        </div>
    )
}

export default PostsArea