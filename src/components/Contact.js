import { Container } from "reactstrap";
import Formulario from '../components/Formulario'


export default function Contact() {
  return (
    <Container className="containe">
      <div className="container-fluid bg-gray-50 text-black py-20" id="contact">
      <h1 className="py-4 text-center text-gray-400">CONTATO</h1>

      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">
            <h5>Informações</h5>
            <p>Para qualquer informação, dúvida ou comentário, preencha o fomulário e deixe seu contato que retornaremos até 24 horas:</p>
          </div>
          <div className="col-6 col-sm-4">
          <h5>P E B Engenharia Ltda.</h5>
            <p>CNPJ : 26.484.214/0001-74</p>
            <p>INSC. ESTADUAL : 181.270.760.114</p>
            <p>INSC. MUNICIPAL : 1351711</p>
          </div>
          <div className="w-100 d-none d-md-block"></div>
          <div className="col-6 col-sm-4">
            <Formulario/>
          </div>
          <div className="col-6 col-sm-4">
            <h4>Orçamento:</h4>
            <h4>(11) 95379-1450 - São Paulo</h4>
            <h4>(16) 99707-4162 - Araraquara</h4>
          </div>
        </div>
      </div>
      </div>
    </Container>
  )
}


