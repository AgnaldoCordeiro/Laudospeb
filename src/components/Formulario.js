import Image from 'next/image'

export default function Formulario() {
    return (

        <form className="row g-4">
            <div className="col-12">               
                <input type="text" className="form-control" id="name" placeholder="Nome"/>
            </div>
            <div className="col-12">
                <input type="tel" className="form-control" id="inputTelefone" placeholder="Telefone" />
            </div>
            <div className="col-md-12">
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="mensagem" rows="3" placeholder="Mensagem"></textarea>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}





//https://1.bp.blogspot.com/-iK8FDVXZg0E/X7h_Lh1fazI/AAAAAAAAATY/qOoWDdL817ASwVSWPLkl2YRGSCPQnFoYgCLcBGAsYHQ/s301/Logo%2B2020%2B-%2BR%25C3%25A1dio%2BMCR%2BWEB%2B300%2Bx%2B300%2B1.png