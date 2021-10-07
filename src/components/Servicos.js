import Image from 'next/image'

export default function Servicos() {
    return (
        <div id="servicos" className="py-20 bg-gray-100">
                <h1 className="text-center py-5 text-gray-400">SERVIÇOS</h1>
        <div className="container-fluid text-black" >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Image className="pb-3" src="/inspelaudo.png" alt="Inspeção e laudo" width="350" height="250"/>
                        <h5 className="h3service" >INSPEÇÃO E LAUDOS</h5>
                        <p>Inspeção predial é uma constatação com análise de risco através de uma vistoria técnica em toda a edificação realizada por profissionais com expertises em engenharia, que tem como objetivo promover a longevidade do imóvel, a segurança construtiva e o conforto de seus usuários, através de prognósticos e conclusões expostas em laudos periciais com apontamentos de todas as manifestações patológicas, falhas, vícios e anomalias construtivas baseadas nas Leis vigentes, Normas Regulamentadoras e Biografias específicas</p>
                   
                    </div>
                    <div className="col">
                        <Image className="pb-3" src="/manutencao.png" alt="Manutenção" width="350" height="250"/>
                        <h5 className="h3service" >MANUTENÇÃO PREDIAL</h5>
                        <p>A manutenção predial é de extrema importância para manter toda edificação em condições de uso e conforto aos usuários onde todos os sistemas estruturais e instalações devem estar em perfeito funcionamento. Motivo pelo qual faz-se necessário as devidas manutenções e até Retrofit para a longevidade das construções.</p>
                    </div>
                    <div className="col">
                    <Image className="pb-3" src="/projetos.png" alt="Projetos" width="350" height="250"/>
                        <h5 className="h3service" >PROJETOS, ORÇAMENTO BASE E GERENCIAMENTO</h5>
                        <p><b>Projetos</b></p>
                        <p>Realizamos projetos inteligentes e viáveis com objetivo de materializar idéias através de concepções construtivas sempre visando ganho de eficiência em curto prazo e acima de tudo satisfação do Cliente.</p>
                        <p><b>Orçamento e planejamento</b></p>
                        <p>Com intuito de evitar atrasos e falta de coordenarção de projetos, a PEB Engenharia oferece um planejamento e orçamento completo de obras desde planilhas quantitativas, contemplando custos de mão de obra, materiais e insumos inerentes aos serviços, bem como cronograma físico-financeiro para um total entendimento e acompanhamento de obras e reformas.</p>
                        <p><b>Gerenciamento</b></p>
                        <p>Setor que visa administrar todas as etapas da obra do início a entrega com base no orçamento e planejamento, garantindo a qualidade, custos e prazos objetivando o conforto e satisfação do Cliente.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>


    )
}