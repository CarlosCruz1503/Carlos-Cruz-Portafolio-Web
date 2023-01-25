import React, { useRef } from 'react';
import "../../styles/css/form.scss"

const Form = () => {

    const modal = useRef()
    const submitForm = () => {
        modal.current.classList.add("visible")
    }

    return (
        <div className='div-form ' id="form">
            <div className="form-back">
                <div className='form-submit' ref={modal} id="form-submit">
                    <h3 className='text-center'>Formulario subido con exito</h3>
                    <h3 className='text-center'>Gracias por contactarte conmigo</h3>
                </div>
                <div className='form-title' id="form-title">
                    <h1 className='text-center'>CONTACTAME.</h1>
                    <h4 className='text-center'>Si tienes algun proyecto en mente y/o necesitas una pagina web, no dudes en contactarme</h4>
                </div>
                <form className="form hidden" action="https://formsubmit.co/carlosjose445566@gmail.com" method='POST'>
                    <label htmlFor="name" >Tú Nombre.</label>
                    <input type="text" className='input' name="name" id="name" />
                    <label htmlFor="email" >Email.</label>
                    <input type="email" className='input' name="email" id="email" />
                    <label htmlFor="mensaje">Mensaje.</label>
                    <textarea type="textarea" className='textarea' name="mensaje" id="mensaje" />
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="https://carlos-cruz-personal-web.onrender.com/"></input>
                    <button type="submit" onClick={
                        () => submitForm()
                    } className='btn btn-light'>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
