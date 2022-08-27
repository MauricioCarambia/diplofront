import React from 'react';
import "../../styles/components/pages/NoticiasPage.css";

const Noticiaitem = (prosp) => {
    const { title, subtitle, imagen, body } = prosp;
    return (
        <main>
            <section>
                <div className="noticia">
                    <img src={imagen} />
                    <div className="textonoticia">
                        <h2>{title}</h2>
                        {/* <h4>{subtitle}</h4> */}
                        <div dangerouslySetInnerHTML={{ __html: body }} className="texto"/>
                    </div>
                </div>
                <hr></hr>
            </section>
        </main>


        /* </main> */
        // <div >
        //     <img src={imagen} />
        //     <h2>{title}</h2>
        //     <h3>{subtitle}</h3>
        //     <div dangerouslySetInnerHTML={{ __html: body }} />
        //     <hr />
        // </div>
    );
}

export default Noticiaitem