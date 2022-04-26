import { Link } from 'react-router-dom'
import '../Styles/Footer.css'

const Footer = () => {
    return(
        <footer>
            <div>
                <img src="./logo.svg" alt="logo footer" />
                <navbar className="navBar-footer">
                    <ul>
                        <li><Link to="/">Politicas Privacidad</Link></li>
                        <li><Link to="/">Acuerdo subscripcion</Link></li>
                        <li><Link to="/">Cancelar subscripcion</Link></li>
                        <li><Link to="/">Ayuda</Link></li>
                    </ul>
                    <p>
                    Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1.
                    </p>
                    <span>
                    © Disney. Todos los derechos reservados.
                    </span>
                </navbar>
            </div>
        </footer>
    )
}

export default Footer;