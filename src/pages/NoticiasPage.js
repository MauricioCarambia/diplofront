import React from "react";
import { useState, useEffect } from "react";
import "../styles/components/pages/NoticiasPage.css";
import axios from 'axios';
import Noticiaitem from "../components/noticias/Noticiaitem";

const NoticiasPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias`);
      setNoticias(response.data);
      setLoading(false);
    };
    cargarNoticias();
  }, []);

  return (
    <section className="titulos_pag">
      <img src="img/telefonos.png" alt="Telefonos" class="imagentel" />
      <h1>Noticias</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        noticias.map(item => <Noticiaitem key={item.id}
          title={item.titulo} subtitle={item.subtitulo}
          imagen={item.imagen} body={item.cuerpo} />)
      )}
    </section>
  );


  // return (
  // <main>
  //   <div className="contenedor">
  //     <img src="img/telefonos.png" alt="Telefonos" class="imagentel" />
  //     <h2>Ultimas noticias</h2>
  //     <div className="columnas">
  //       <section className="noticias">
  //         <div className="noticia">
  //           <img src="https://via.placeholder.com/960x300" alt="" />
  //           <div className="textonoticia">
  //             <h3>Noticia 1</h3>
  //             <p>
  //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //               Recusandae eius reiciendis ipsam amet eum ex hic facere
  //               facilis excepturi numquam, ipsa iusto fugit, dicta nobis minus
  //               exercitationem harum iste! Et.
  //             </p>
  //             <p>
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Perferendis quaerat quos tempore sequi inventore quo culpa
  //               facere. Similique, dolore enim ab illo qui eligendi et
  //               incidunt dicta commodi laboriosam adipisci.
  //             </p>
  //           </div>
  //         </div>
  //         <hr></hr>
  //         <div className="noticia">
  //           <img src="https://via.placeholder.com/960x300" alt="" />
  //           <div className="textonoticia">
  //             <h3>Noticia 1</h3>
  //             <p>
  //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //               Recusandae eius reiciendis ipsam amet eum ex hic facere
  //               facilis excepturi numquam, ipsa iusto fugit, dicta nobis minus
  //               exercitationem harum iste! Et.
  //             </p>
  //             <p>
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Perferendis quaerat quos tempore sequi inventore quo culpa
  //               facere. Similique, dolore enim ab illo qui eligendi et
  //               incidunt dicta commodi laboriosam adipisci.
  //             </p>
  //           </div>
  //         </div>
  //         <hr></hr>
  //         <div className="noticia">
  //           <img src="https://via.placeholder.com/960x300" alt="" />
  //           <div className="textonoticia">
  //             <h3>Noticia 2</h3>
  //             <p>
  //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //               Recusandae eius reiciendis ipsam amet eum ex hic facere
  //               facilis excepturi numquam, ipsa iusto fugit, dicta nobis minus
  //               exercitationem harum iste! Et.
  //             </p>
  //             <p>
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Perferendis quaerat quos tempore sequi inventore quo culpa
  //               facere. Similique, dolore enim ab illo qui eligendi et
  //               incidunt dicta commodi laboriosam adipisci.
  //             </p>
  //           </div>
  //         </div>
  //         <hr></hr>
  //         <div className="noticia">
  //           <img src="https://via.placeholder.com/960x300" alt="" />
  //           <div className="textonoticia">
  //             <h3>Noticia 3</h3>
  //             <p>
  //               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //               Recusandae eius reiciendis ipsam amet eum ex hic facere
  //               facilis excepturi numquam, ipsa iusto fugit, dicta nobis minus
  //               exercitationem harum iste! Et.
  //             </p>
  //             <p>
  //               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //               Perferendis quaerat quos tempore sequi inventore quo culpa
  //               facere. Similique, dolore enim ab illo qui eligendi et
  //               incidunt dicta commodi laboriosam adipisci.
  //             </p>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="telefonos">
  //         <h3>Nuestros telefonos</h3>
  //         <div className="telefono">
  //           <h4>Para turnos</h4>
  //           <ul>
  //             <li>Whatsapp: 11524438656</li>
  //             <li>39914493</li>
  //             <li>39892512</li>
  //           </ul>
  //           <h4>Asociarse</h4>
  //           <ul>
  //             <li>1136646249</li>
  //           </ul>
  //           <h4>Cuota</h4>
  //           <ul>
  //             <li>1142145816</li>
  //           </ul>
  //         </div>
  //       </section>
  //     </div>
  //   </div>
  // </main>
  // );
}

export default NoticiasPage;
