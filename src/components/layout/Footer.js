import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer className='pie'>
            <div className='enlaces'>
                <div className='redes'>
                    <ul>
                        <li> <a rel='instagram' href='http://www.instagram.com/lasalarivadavia' target="_blank">Instagram</a> </li>
                        <li> <a rel='facebook' href='https://www.facebook.com/sala.rivadaviatemperley' target="_blank">Facebook</a> </li>
                        <li> <a rel='mail' href='mailto:salarivadavia@hotmail.com' target="_blank">Email</a> </li>
                    </ul>
                </div>
                <div className='paginas'>
                    <ul>
                        <li> <Link to="/">Noticias</Link></li>
                        <li> <Link to="/especialidades">Especialidades</Link></li>
                        <li> <Link to="/servicios">Servicios</Link></li>
                        <li> <Link to="/galeria">Galeria</Link></li>
                        <li> <Link to="/socios">Socios</Link></li>
                        <li> <Link to="/llegar">Como Llegar</Link></li>
                        <li> <Link to="/contactanos">Contactanos</Link></li>
                    </ul>
                </div>
            </div>
            <div className='diseño'>
                <p> Diseñado por Mauricio D. Carambia -&copy;2022</p>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    );
}
export default Footer;