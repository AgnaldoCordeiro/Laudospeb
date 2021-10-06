import React from 'react';
import Image from 'next/image' 


const InspManu = (props) => {

  return (  
    <div className="pt-20" id="inspecaomanutencao">
      <h1 className="py-4 text-center text-gray-400">INSPEÇÃO E MANUTENÇÃO</h1> 
    <section className="grid3">  
      <div className="grid3-item">
        <img src="./001.png" alt="inspecao-fachadas-drone"/>
        <p>Inspecao Fachadas Drone</p>
      </div>
      <div className="grid3-item">
        <img src="./002.png" alt="PISO DE CONCRETO"/>
        <p>Piso de Concreto</p>
      </div>
      <div className="grid3-item">
        <img src="./003.png" alt="VAZAMENTOS"/>
        <p>Vazamentos</p>
      </div>
      <div className="grid3-item">
        <img src="./004.png" alt="MANUTENÇÃO HIDRÁULICA"/>
        <p>Manutenção Hidráulica</p>
      </div>     
      <div className="grid3-item">
        <img src="./005.png" alt="MANUTENÇÃO_RESIDENCIA"/>
        <p>Manutenção Residencia</p>
      </div>     
      <div className="grid3-item">
        <img src="./006.png" alt="INSTALAÇÕES"/>
        <p>Instalações</p>
      </div>     
      <div className="grid3-item">
        <img src="./007.png" alt="COMANDOS_ELÉTRICOS"/>
        <p>Comandos Elétricos</p>
      </div>     
      <div className="grid3-item">
        <img src="./008.png" alt="ENSAIOS_NÃO_DESTRUTIVOS"/>
        <p>Ensaios não Destrutivos</p>
      </div>     
    </section>
    </div>
  );
}

export default InspManu;