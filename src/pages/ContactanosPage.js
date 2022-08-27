import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/components/pages/ContactanosPage.css";


const ContactanosPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contactanos', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main>
            <div className="titulos_pag">
                <h1>Contactanos</h1>
                <div>
                    <form action='/contactanos' method='post' className='formulario' onSubmit={handleSubmit}>
                        <div className="campos">
                            <label className='campo'>Nombre:</label>
                            <input type="text" name='nombre' className="campo" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
                        </div>
                        {<div className="campos">
                            <label className='campo'>Email:</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className="campo" placeholder="Email" required />
                        </div>}
                        <div className="campos">
                            <label className='campo'>Telefono:</label>
                            <input type="text" name='telefono' value={formData.telefono} onChange={handleChange} className="campo" placeholder="Telefono" />
                        </div>
                        <div className="campos">
                            <label className='campo'>Dejanos un comentario:</label>
                            <textarea className='campo' name="mensaje" value={formData.mensaje} onChange={handleChange} cols="30" rows="10"
                                placeholder="Comentario..." required></textarea>
                        </div>
                        <div className="campos">
                            <button className='campo' type="submit" value="enviar">Enviar</button>
                            <button className='campo' type="reset" value="reset">Borrar</button>
                        </div>
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </div>
            </div>
        </main>
    );
};


export default ContactanosPage;