import React, { useState } from 'react';



const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
    <div className="row">
        <nav id="hd-content" className="navbar navbar-expand-sm navbar-dark bg-dark col-12 flex-sm-column flex-lg-row align-items-start">
            <a id="hd-logo-a" href="#" className="navbar-brand">INSPEÇÕES PREDIAIS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul id="hd-ul" className="navbar-nav">
                    <li id="hd-li-a" className="nav-item"><a className="nav-link" href="/.#home">Home</a></li>
                    <li id="hd-li-a" className="nav-item"><a className="nav-link" href="/.#servicos">Serviços</a></li>
                    <li id="hd-li-a" className="nav-item"><a className="nav-link" href="/.#quemsomos">Quem Somos</a></li>
                    <li id="hd-li-a" className="nav-item"><a className="nav-link" href="/.#inspecaomanutencao">Inspeção e Manutenção</a></li>
                    <li id="hd-li-a" className="nav-item"><a className="nav-link" href="/.#contact">Contato</a></li>          
                </ul>
            </div>
        </nav>
    </div>
</div>

  );
}


export default Headers;

