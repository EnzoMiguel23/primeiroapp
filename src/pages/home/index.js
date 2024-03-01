import React from 'react';
import Header from '../../components/header/header';
import './styles.css';
import Video from '../../assets/video.mp4';
import Cards from '../../components/cards';
import Logo2 from '../../assets/avatar_2_the_way_of_water_logo_png_hd_2022_by_andrewvm_deoszau-pre.png'


function Home(){
   return (
            <>
                <Header />
                <div id='banner' ></div>
                    <div className='foto-fundo'>
                    <div id='trailer-container'>
                        <div className='content'>
                            <video autoPlay muted className='trailer'>
                                <source src={Video} />
                                Seu navegador não tem suporte para vídeos
                                </video>
                                <div id='sinopse' >
                                    <p className='description' >
                                    Em Avatar: O Caminho da Água, sequência de Avatar (2009), após dez anos da primeira batalha de Pandora entre os Na'vi e os humanos, Jake Sully (Sam Worthington) vive pacificamente com sua família e sua tribo. Ele e Ney'tiri formaram uma família e estão fazendo de tudo para ficarem juntos, devido a problemas conjugais e papéis que cada um tem que exercer dentro da tribo. No entanto, eles devem sair de casa e explorar as regiões de Pandora, indo para o mar e fazendo pactos com outros Na'vi da região. Quando uma antiga ameaça ressurge, Jake deve travar uma guerra difícil contra os humanos novamente. Mesmo com dificuldade, Jake acaba fazendo novos aliados - alguns dos quais já vivem entre os Na'vi e outros com novos avatares. Mesmo com uma guerra em curso, Jake e Ney'tiri terão que fazer de tudo para ficarem juntos e cuidar da família e de sua tribo.
                                    </p>
                                    <button className='button'>Comprar ingresso</button>
                                </div>
                        </div>
                    </div>
                </div>
                <Cards />
                <footer>
                    <img id='logo2' src={Logo2} />
                    <span>Todos os direitos reservados ©</span>
                    <span>Desenvolvido por: Enzo Miguel</span>
                </footer>
            </>
    )
}

export default Home;