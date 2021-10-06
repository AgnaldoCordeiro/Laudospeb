import React, { useState } from 'react';



const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="hd-content">
        <div className="container">
          <div className="hd-content-menu">

            <h1 className="hd-logo-a">INSPEÇÕES PREDIAIS</h1>
            <ul className="hd-ul">
              <li><a href="/.#home" className="hd-li-a">Home</a></li>
              <li><a href="/.#servicos" className="hd-li-a">Serviços</a></li>
              <li><a href="/.#quemsomos" className="hd-li-a">Quem Somos</a></li>
              <li> <a href="/.#inspecaomanutencao" className="hd-li-a">Inspeção</a></li>
              <li><a href="/.#contact" className="hd-li-a">Contato</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}


export default Headers;

