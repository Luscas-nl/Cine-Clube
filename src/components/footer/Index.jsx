import "./Style.css"
import LogoIF from "../../assets/images/Logo_IF.svg"

function Footer(props) {
    return(
        <footer className="homeFooter">
            <div className="footerPlace">
                <div className="footerR footerBox">
                    <img src={LogoIF} alt="Logo IFAL" className="logoIF_Footer"/>
                    <p>Instituto Federal de Educação, Ciência e Tecnologia de Alagoas <span className="campusName">Campus Maceió</span></p>
                </div>
                <div className="footerM footerBox">
                    <div className="boxNameFooter">
                        <p>Contatos</p>
                    </div>
                    <div className="boxContsFooter">
                        <ul>
                            <li>
                                <p className="RFooter">Email do clube: </p>
                                <p className="SFooter">cineclubeifal@gmail.com</p>
                            </li>
                            <li>
                                <p className="RFooter">GEEL: </p>
                                <p className="SFooter">gremioestudantiledsonluisifal@gmail.com</p>
                            </li>
                            <li>
                                <p className="RFooter">DAA: </p>
                                <p className="SFooter">daa.ifalmaceio@ifal.edu.br</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerL footerBox">
                    <div className="boxNameFooter">
                        <p>Outros Contatos</p>
                    </div>
                    <div className="boxContsFooter">

                    </div>
                </div>
            </div>

            <p className="developerFooter">2023 Desenvolvido por Eduardo Lucas da Silva</p>
        </footer>
    )
}

export default Footer