import Image from 'next/image' 

export default function Quemsomos() {
    return (
        <div className="container-fluid bg-gray-100 text-black pt-20 pb-20" id="quemsomos">
                    <h1 className="mb-5 mt-5 text-center text-gray-400">QUEM SOMOS</h1>                        
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l7
                    py-5
                    px-9                    
                    ">
                        <p className="text-xl justify-start m-2">Somos uma empresa especializada de engenharia que surgiu da fusão de experiências na construção civil e de manutenções prediais, com intuito de oferecer serviços de manutenções, projetos técnicos, laudos e inspeções prediais, visando soluções inteligentes e econômicas para longevidade das edificações de acordo com as normas de segurança e de qualidade.</p>
                                           
                    </div>
                    <div className="col s12 m12 l5 center
                    py-4
                    px-6                                     
                    ">
                        <Image className="" src="/quemsomos.png" alt="quem somos" width="350" height="350"/>
                    </div>
                </div>
            </div>
        </div>

    )
}