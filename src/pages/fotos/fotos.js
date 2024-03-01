import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Imagem from '../../assets/g_avatar_thewayofwater_97_12_e6c44423.webp';
import Imagem1 from '../../assets/avatar-oceano_83dz.jpg';
import Imagem2 from '../../assets/Avatar-O-Caminho-da-Agua-Neytiri.jpg';
import Imagem3 from '../../assets/avatar-2-2.jpg'
import Imagem4 from '../../assets/avatar-3-jake-sully-out-as-narrator-replaced-by-son-loak-q8g_qny6.jpg';
import Imagem5 from '../../assets/20200131avatar_1-680x382.jpg';
import Imagem6 from '../../assets/cena-de-avatar-2-imagem-divulgacao-disney.jpg';
import Imagem7 from '../../assets/avatar_2_DdmcrZS.png';
import Logo3 from '../../assets/avatar_2_the_way_of_water_logo_png_hd_2022_by_andrewvm_deoszau-pre.png'
import imagem8 from '../../assets/a03.png';

function Fotos(){
    return (
        <>
            <Header />
            <div className='titulo'>Fotografias cinematográficas:</div>
            <div id='imagens' >
                <img className='foto' src={Imagem} />
                <img className='foto' src={Imagem1} />
                <img className='foto' src={Imagem2} />
                <img className='foto' src={Imagem3} />
                <img className='foto' src={Imagem4} />
                <img className='foto' src={Imagem5} />
                <img className='foto' src={Imagem6} />
                <img className='foto' src={Imagem7} />
            </div>

            <footer>
                <div id='footer-foto'>
                    <img id='logo2' src={Logo3} />
                    <span>Todos os direitos reservados ©</span>
                    <span>Desenvolvido por: Enzo Miguel</span>
                </div>
                <img className='foto-footer' src={imagem8}/> 
            </footer>
        </>
        
    )
}

export default Fotos;