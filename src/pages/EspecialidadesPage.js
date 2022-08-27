import React from 'react';
import "../styles/components/pages/EspecialidadesPage.css";

const EspecialidadesPage = (props) => {
    return (
        <main class="titulos_pag">
            <h1>Nuestras especialidades</h1>
            <div className='especialidad'>
                <div className="especialidades">
                    <img src="img/alergista.png" id="alergista" alt="Alergista" />
                    <div className="info">
                        <h3>Alergista</h3>
                        <p>¿Qué es un médico alergista?
                            Los alergistas/inmunólogos diagnostican las afecciones alérgicas mediante pruebas especiales.</p>
                        <ul>
                            <li>Lunes - 9hs a 11hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/cardiologia.png" id="cardiologia" alt="Cardiologia" />
                    <div className="info">
                        <h3>Cardiologia</h3>
                        <p>Rama de la medicina que se especiliza en el diagnóstico y tratamiento de enfermedades del corazón, los vasos sanguíneos y el sistema circulatorio. Estas enfermedades incluyen enfermedad de las arterias coronarias, problemas del ritmo del corazón e insuficiencia cardíaca.</p>
                        <ul>
                            <li>Lunes - 12hs a 16hs</li>
                            <li>Martes - 12hs a 15hs</li>
                            <li>Miercoles - 9hs a 12hs</li>
                            <li>Jueves - 8hs a 12hs</li>
                            <li>Jueves - 15.30hs a 17hs</li>
                            <li>Viernes - 8.30hs a 13hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/clinico.png" id="clinico" alt="clinico" />
                    <div className="info">
                        <h3>Medico Clinico</h3>
                        <p>Médico que estudia las enfermedades y hace los diagnósticos mediante el examen directo de los enfermos.</p>
                        <ul>
                            <li>Lunes a viernes - 9hs a 18hs por orden de llegada</li>
                            <li>Lunes y Jueves - 14hs a 19hs</li>
                            <li>Miercoles - 14hs a 17hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/dermatologia.png" id="dermatologia" alt="dermatologia" />
                    <div className="info">
                        <h3>Dermatologia</h3>
                        <p>La dermatología es la rama de la medicina que se especializa en el diagnóstico, tratamiento y manejo de las enfermedades y desórdenes de la piel.​</p>
                        <ul>
                            <li>Lunes - 9.30hs a 11.50hs</li>
                            <li>Miercoles - 9.30hs a 11.50hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/diabetologia.png" id="diabetologia" alt="diabetologia" />
                    <div className="info">
                        <h3>Diabetologia</h3>
                        <p>El diabetólogo es un médico internista, quién se especializa en el cuidado del paciente diabético. El mismo incluye estrategias que van desde la prevención (como cambios en el estilo de vida), tratamiento, incluyendo la regulación y la dosificación de la medicación (p.ej. insulina), y el manejo de las complicaciones de la enfermedad, tales como: la retinopatía, nefropatía y neuropatía diabética.​</p>
                        <ul>
                            <li>Miercoles - 13hs a 16hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/endocrinologia.png" id="endocrinologia" alt="endocrinologia" />
                    <div className="info">
                        <h3>Endocrinologia</h3>
                        <p>La endocrinología es una disciplina de la medicina que estudia el sistema endocrino y las enfermedades provocadas por un funcionamiento inadecuado del mismo.​</p>
                        <ul>
                            <li>Lunes - 8hs a 10hs</li>
                            <li>Martes - 8hs a 10hs (cada 15 dias)</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/ecografia.png" id="ecografia" alt="ecografia" />
                    <div className="info">
                        <h3>Ecografia/Ecodoppler</h3>
                        <p>La ecografía, también llamada ultrasonografía o ecosonografía, es un procedimiento de diagnóstico usado en los hospitales y clínicas que emplea el ultrasonido para crear imágenes bidimensionales o tridimensionales. Un pequeño instrumento muy similar a un "micrófono" llamado transductor emite ondas de ultrasonidos.</p>
                        <ul>
                            <p>Ecografia</p>
                            <li>Martes - 9hs a 12hs</li>
                            <li>Viernes - 8hs a 11¿2hs</li>
                            <p>Ecodoppler</p>
                            <li>Martes - 14hs a 16hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/flebologia.png" id="flebologia" alt="Flebologia" />
                    <div className="info">
                        <h3>Flebologia</h3>
                        <p>La flebología o Cirugía Vascular Periférica es una rama de la medicina que estudia el estado de las venas.​Existe una vertiente de estudio y tratamiento patológica y otra dedicada a la flebología cosmética o estética. Dentro de la primera categoría, la flebología estudia la enfermedad tromboembólica venosa.</p>
                        <ul>
                            <li>Viernes - 9hs a 12hs (Cada 15 dias)</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/gastro.png" id="gastro" alt="Gastroenterologia" />
                    <div className="info">
                        <h3>Gastroenterologia/Proctologia/Cir. Gral</h3>
                        <p>La gastroenterología es el estudio de la función normal y las enfermedades del esófago, estómago,
                            intestino delgado, colon y recto, páncreas, vesícula biliar, conductos biliares e hígado.</p>
                        <ul>
                            <li>Lunes - 18.30hs a 20hs</li>
                            <li>Miercoles - 13hs a 15hs</li>
                            <li>Viernes - 15hs a 18hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/gineco.png" id="ginecologia" alt="Ginecologia" />
                    <div className="info">
                        <h3>Ginecologia/Obstetricia/Pat Mamaria</h3>
                        <p>Campo de la medicina que se especializa en la atención de las mujeres durante el embarazo y el parto,
                            y en el diagnóstico y tratamiento de enfermedades de los órganos reproductivos femeninos.</p>
                        <ul>
                            <li>Lunes - 9hs a 11hs</li>
                            <li>Martes - 13hs a 16hs</li>
                            <li>Martes - 16hs a 18.30hs</li>
                            <li>Jueves - 17.30hs a 19.30hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/kinesiologia.png" id="kinesiologia" alt="Kinesiologia" />
                    <div className="info">
                        <h3>Kinesiologia</h3>
                        <p>La kinesiología es el estudio científico del movimiento del cuerpo. La kinesiología aborda los principios y mecanismos de movimientos fisiológicos, biomecánicos y psicodinámicos.</p>
                        <ul>
                            <li>Lunes - 10hs a 12hs y 14.30hs a 17.30hs</li>
                            <li>Miercoles - 10hs a 12hs y 14.30hs a 17.30hs</li>
                            <li>Viernes - 10hs a 12hs y 14.30hs a 17.30hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/nutricionista.png" id="nutricionista" alt="Nutricionista" />
                    <div className="info">
                        <h3>Nutricionista</h3>
                        <p>Un nutricionista, dietista-nutricionista, nutriólogo, dietista o dietólogo es un profesional sanitario experto en alimentación, nutrición y dietética.</p>
                        <ul>
                            <li>Lunes - 13hs a 17.30hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/neumonologo.png" id="neumonologo" alt="Neumonologo" />
                    <div className="info">
                        <h3>Neumonologo</h3>
                        <p>Rama de la medicina que se especializa en el diagnóstico y tratamiento de enfermedades de los pulmones y otras partes del aparato respiratorio. Estas enfermedades incluyen asma, enfisema, tuberculosis y neumonía.</p>
                        <ul>
                            <li>Martes - 17hs a 19hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/neurologia.png" id="neurologia" alt="Neurologia" />
                    <div className="info">
                        <h3>Neurologia</h3>
                        <p>La neurología es la rama de la medicina que estudia el sistema nervioso y sus trastornos.​ Específicamente se ocupa de la prevención, diagnóstico, tratamiento y rehabilitación de todas las enfermedades que involucran al sistema nervioso central, sistema nervioso periférico y el sistema nervioso autónomo.</p>
                        <ul>
                            <li>Martes - 17hs a 19hs</li>
                            <li>Jueves - 9hs a 12hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/nefrologia.png" id="nefrologia" alt="Nefrologia" />
                    <div className="info">
                        <h3>Nefrologia</h3>
                        <p>La nefrología es la especialidad médica, rama de la medicina interna, que se ocupa del estudio de la estructura y la función renal, tanto en la salud como en la enfermedad, incluyendo la prevención y tratamiento de las enfermedades renales.</p>
                        <ul>
                            <li>Jueves - 15hs a 16hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/odontologia.png" id="odontologia" alt="Odontologia" />
                    <div className="info">
                        <h3>Odontologia/Odontolopediatria</h3>
                        <p>La odontología es una de las ciencias de la salud que se encarga del diagnóstico, tratamiento y prevención de las enfermedades del aparato estomatognático, el cual incluye además de los dientes, las encías, el tejido periodontal, el maxilar superior, el maxilar inferior y la articulación temporomandibular.</p>
                        <ul>
                            <li>Martes - 9hs a 16hs</li>
                            <li>Miercoles - 9hs a 16hs</li>
                            <li>Jueves - 9hs a 16hs</li>
                            <li>Viernes - 9hs a 16hs</li>
                            <li>Sabado - 9hs a 13hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/oftalmo.png" alt="Oftalmologia" />
                    <div className="info">
                        <h3>Oftalmologia</h3>
                        <p>Médico que tiene una formación especial para diagnosticar y tratar problemas de los ojos, incluso
                            lesiones y enfermedades.</p>
                        <ul>
                            <li>Lunes - 9hs a 14hs</li>
                            <li>Viernes - 13hs a 16hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/otorrino.png" id="otorrinolaringologia" alt="Otorrinolaringologia" />
                    <div className="info">
                        <h3>Otorrinolaringologia</h3>
                        <p>La otorrinolaringología (ORL), cuyo nombre oficial es "otorrinolaringología y cirugía de cabeza y cuello", es la especialidad médico-quirúrgica que se encarga del estudio de las enfermedades del oído, tanto auditivas como del equilibrio, de las vías respiratorias superiores y parte de las inferiores (nariz, senos paranasales, faringe y laringe).</p>
                        <ul>
                            <li>Martes - 10hs a 12hs</li>
                            <li>Miercoles - 13hs a 15hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/otoemisiones.png" id="otoemisiones" alt="Otoemisiones acusticas" />
                    <div className="info">
                        <h3>Otoemisiones acusticas</h3>
                        <p>Las otoemisiones acústicas, en inglés conocidas como OAE (Otoacoustic Emissions), son unas pruebas para diagnosticar el estado auditivo del paciente. Las OAE son los sonidos originados en la cóclea, producidos por su propia actividad y como resultado del movimiento de las células ciliadas del órgano de Corti.</p>
                        <ul>
                            <li>Miercoles - 8hs a 12hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/osteopatia.png" id="osteopatia" alt="Osteopatia" />
                    <div className="info">
                        <h3>Osteopatia</h3>
                        <p>La osteopatía es un tipo de medicina alternativa que enfatiza la manipulación física del tejido muscular y óseo.</p>
                        <ul>
                            <li>viernes - 13hs a 19hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/pediatria.png" id="pediatria" alt="Pediatria" />
                    <div className="info">
                        <h3>Pediatria</h3>
                        <p>La pediatría es la especialidad médica y es la rama de la medicina que involucra la atención médica de bebés, niños y adolescentes.</p>
                        <ul>
                            <li>Lunes - 16hs a 19hs</li>
                            <li>Martes - 13hs a 17hs</li>
                            <li>Miercoles - 8hs a 11hs</li>
                            <li>Jueves - 12hs a 15hs</li>
                            <li>viernes - 15hs a 19hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/psiquiatria.png" id="psiquiatria" alt="Psiquiatria" />
                    <div className="info">
                        <h3>Psiquiatria</h3>
                        <p>Parte de la medicina que se ocupa del estudio, el diagnóstico, el tratamiento y la prevención de las enfermedades mentales de carácter orgánico y no orgánico.</p>
                        <ul>
                            <li>Lunes - 16hs a 18hs</li>
                            <li>Jueves - 9hs a 14hs</li>
                            <li>Viernes - 14hs a 18hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/podologia.png" id="podologia" alt="Podologia" />
                    <div className="info">
                        <h3>Podologia</h3>
                        <p>La podología es una rama de la medicina que tiene por objeto el estudio, diagnóstico y tratamiento de las enfermedades y alteraciones que afectan el pie.</p>
                        <ul>
                            <li>Lunes - 8hs a 12hs</li>
                            <li>Jueves - 8hs a 12hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/reumatologia.png" id="reumatologia" alt="Reumatologia" />
                    <div className="info">
                        <h3>Reumatologia</h3>
                        <p>La reumatología es una especialidad médica dedicada a los trastornos médicos del aparato locomotor y del tejido conectivo, que abarca un gran número de entidades clínicas conocidas en conjunto como enfermedades reumáticas, a las que se suman un gran grupo de enfermedades de afectación sistémica: las conectivopatías.</p>
                        <ul>
                            <li>Miercoles - 11hs a 16hs (cada 15 dias)</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/trauma.png" alt="Traumatologia" />
                    <div className="info">
                        <h3>Traumatologia</h3>
                        <p>Un traumatólogo es aquel profesional, especializado en el tratamiento de las lesiones que sufre el
                            aparato locomotor. La traumatología es por ende, la especialidad médica que se centra en el
                            análisis, diagnóstico, tratamiento y seguimiento de dolencias adquiridas por el sistema
                            músculo-esquelético.</p>
                        <ul>
                            <li>Lunes - 13hs a 17hs</li>
                            <li>Miercoles - 9hs a 12hs</li>
                            <li>Miercoles - 15hs a 17hs</li>
                            <li>Jueves - 15hs a 17hs</li>
                        </ul>
                    </div>
                </div>
                <div className="especialidades">
                    <img src="img/urologia.png" id="urologia" alt="Urologia" />
                    <div className="info">
                        <h3>Urologia</h3>
                        <p>La urología es la especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las patologías que afectan al aparato urinario, glándulas suprarrenales y retroperitoneo de ambos sexos, y el aparato reproductor masculino.</p>
                        <ul>
                            <li>Sabado - 10hs a 13hs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main >
    );
}
export default EspecialidadesPage;