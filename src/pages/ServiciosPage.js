import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/pages/ServiciosPage.css";

const ServiciosPage = (props) => {
    return (
        <main>
            <div className="titulos_pag">
                <h1>Servicios</h1>
                <div className="derivaciones">
                    <ul>
                        <li>Enfermeria las 24hs</li>
                        <li>Guardia medico general las 24hs</li>
                    </ul>
                </div>
                <div className="serviciototal">
                    <div className="servicio">
                        <div className="abecedario">
                            <p>A</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="EspecialidadesPage.js#alergista">Alergista</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>C</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Cardiologia</a></li>
                                <li><a href="especialidades.html#gastro">Cardiologia Infantil</a></li>
                                <li><a href="especialidades.html#gastro">Clinica medica</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>D</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Dermatologia</a></li>
                                <li><a href="especialidades.html#gastro">Diabetologia</a></li>
                                <li><a href="especialidades.html#gastro">Deportologo</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>E</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Endocrinologia</a></li>
                                <li><a href="especialidades.html#gastro">Ecografias</a></li>
                                <li><a href="especialidades.html#gastro">Enfermeria</a></li>
                                <li><a href="especialidades.html#gastro">Ecodoppler</a></li>
                                <li><a href="especialidades.html#gastro">Especialista en columna</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>F</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Fonoaudiologia</a></li>
                                <li><a href="especialidades.html#gastro">Flebologia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="abecedario">
                            <p>G</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Gastroenterologia</a></li>
                                <li><a href="especialidades.html#gastro">Ginecologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>K</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Kinesiologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>M</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Masoterapia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>N</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Nutrición</a></li>
                                <li><a href="especialidades.html#gastro">Neumonologia</a></li>
                                <li><a href="especialidades.html#gastro">Neurologia</a></li>
                                <li><a href="especialidades.html#gastro">Nefrologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>O</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Odontologia</a></li>
                                <li><a href="especialidades.html#gastro">Oftalmologia</a></li>
                                <li><a href="especialidades.html#gastro">Otorrinolaringologia</a></li>
                                <li><a href="especialidades.html#gastro">Otomisiones</a></li>
                                <li><a href="especialidades.html#gastro">Osteopatia</a></li>
                                <li><a href="especialidades.html#gastro">Obstetricia</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="abecedario">
                            <p>P</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Pediatria</a></li>
                                <li><a href="especialidades.html#gastro">Psiquiatria</a></li>
                                <li><a href="especialidades.html#gastro">Podologia</a></li>
                                <li><a href="especialidades.html#gastro">Psicologia</a></li>
                                <li><a href="especialidades.html#gastro">Psicopedagogia</a></li>
                                <li><a href="especialidades.html#gastro">Proctologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>R</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Reumatologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>T</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Traumatologia</a></li>
                            </ul>
                        </div>
                        <div className="abecedario">
                            <p>U</p>
                        </div>
                        <div className="servicioinfo">
                            <ul>
                                <li><a href="especialidades.html#gastro">Urologia</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 >Derivaciones</h1>
                <div className="derivaciones">
                    <ul>
                        <li>RDA Centro de imagenes - Lomas / Adrogue</li>
                        <li>Policlinica Gran BsAs</li>
                        <li>Cardiologia del Sur</li>
                        <li>Laboratorio Messina</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default ServiciosPage;