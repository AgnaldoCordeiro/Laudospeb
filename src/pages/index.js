import Head from 'next/head'
import Headers from '../components/Headers'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'
import Contact from '..//components/Contact'
import InspManu from '../components/InspManu'
import Quemsomos from '../components/Quemsomos'
import HomeComponente from '../components/HomeComponente'
import Whatssap from '../components/Whatssap'
import Servicos from '../components/Servicos'


export default function Home() {
  return (

    <div>
      <main>
        <Head>
          <title>PEB Engenharia</title>
          <meta name="description" content="site empresa PEB Engenharia" />
          <meta charSet="UTF-8"/>          
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
            </Head>
            <Headers />
            <HomeComponente id="home" />
            <Servicos id="servicos" />
            <Quemsomos id="quemsomos" />           
            <InspManu id="inspecaomanutencao" />
            <Contact id="contact" />

            <Footer />
          </main>


          <div className="Whatssap">
            <Whatssap />
          </div>

        </div>
        )
}
