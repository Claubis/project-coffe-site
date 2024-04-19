
/* Importação do CSS */
import './style.css'

/* Importação da imagem  que será utilizada como fundo */
import imagem from './assets/imagem1.png'
import imagem2 from './assets/imagem5.png'

export default function Marketing() {

    return (

        <div className='container-marketing-segunda-pagina'>

            <div className='container-info-segundo-box-marketing-segunda-pagina'>
                <img className='imagem-produto-principal-marketing-segunda-pagina' src={imagem.src} alt="" />
            </div>
            
            <div className='container-info-primeiro-box-marketing-segunda-pagina'>

                <div className='box-titulo-marketing-segunda-pagina'>
                    <h1 className='titulo-marketing-segunda-pagina'>Respire fundo, sorria e mergulhe nesta nova experiência </h1>
                </div>

                <div className='box-frase-marketing-segunda-pagina'>
                    <h2 className='titulo-marketing-segunda-pagina'>Uma experiência nova e acolhedora, que só encontrará aqui. </h2>
                </div>

                <div className='titulo-sobre-produto-marketing-segunda-pagina'>
                    <h2 className='subtitulo-marketing-segunda-pagina'>Desfrute, conheça, sinta</h2>
                </div>

                <div>
                    <p className='frase-marketing-segunda-pagina'>Que seu dia seja tão delicioso quanto o aroma sedutor de café com whisky e uma fatia generosa de bolo fresquinho.</p>

                </div>

                <div>
                    <p className='frase-marketing-segunda-pagina'>Junte-se a nós nessa jornada de descobertas e degustações, onde cada xícara e cada drinque nos transportam para novos patamares de prazer gustativo.</p>
                </div>

            </div>

            <div className='container-info-terceiro-box-marketing-segunda-pagina'>
                <img className='imagem-produto-principal-marketing-segunda-pagina' src={imagem2.src} alt="" />
            </div>

            

        </div>
    );
}