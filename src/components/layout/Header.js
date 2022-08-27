import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div id="inicio" className="cabecera">
                <img src="img/logosala.png" alt="sala rivadavia" className="imagenlogo" />
                <div className="cabeza">
                    <div className="sala">
                        <h1>Sala Bernardino Rivadavia</h1>
                        <h4>Sociedad de fomento</h4>
                    </div>
                    <div className="atencion">
                        <h3>Atencion a socios y particulares</h3>
                        <h3>Aranceles comunitarios</h3>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;