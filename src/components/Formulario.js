import emailjs from "emailjs-com";
import React from 'react';


export default function Formulario() {



    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_vd9139f', 'template_0xohirn', e.target, 'user_LWFJ0ZzZXSonhGWgzgBwQ')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
   



    return (

        <form className="row g-4" onSubmit={sendEmail}>
            <div className="col-12">               
                <input type="text" className="form-control" name="name" placeholder="Nome"/>
            </div>
            <div className="col-12">
                <input type="tel" className="form-control" name="tel" placeholder="Telefone" />
            </div>
            <div className="col-md-12">
                <input type="email" className="form-control" name="email" placeholder="Email"/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" name="mensagem" rows="3" placeholder="Mensagem"></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary" value="Enviar mensagem">Enviar</button>
            </div>
        </form>
    )
}