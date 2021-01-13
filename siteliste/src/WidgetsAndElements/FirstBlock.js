import './Styles/Poles.css';
import React from 'react';
import Block_Pres from './Block_Pres';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import pres from '../photos/img_mdp/pres.jpg'

import vpimtbs from '../photos/img_mdp/vpimtbs.jpg'
import vptsp from '../photos/img_mdp/vptsp.jpg'
import vpbachelor from '../photos/img_mdp/vpbachelor.jpg'


export default function FirstBlock(props) {
  let blockPres = <Block_Pres title="Présidence" img={pres}
    textname="Ulysse Aubin"
    text="Afin que le navire arrive à destination, Ulysse peut compter sur ses VP pour l’aider à guider
    le reste de l’équipage à travers la mer déchainée qu’est l’INT ! Mais avec leurs idées toutes plus folles
    les unes que les autres, on se demande parfois qui devrait être attaché au mât…"
    text2="Ulysse, le président : rationnel, pragmatique, et efficace.
    Il opère avec un ratio énergie/sommeil imbattable." />;
  let blockVP1 = <Block_Pole nbr="1" title="VP IMT-BS" imgone={vpimtbs}
    textname="Grégory Le Moal"
    text="Aussi grand que drôle, derrière son manque de tact
    se cache une honnêteté sans faille et l’envie de toujours faire mieux.
    Sa bienveillance est naturelle, mais mieux vaut ne pas trop le décevoir. " />;
  let blockVP2 = <Block_Pole nbr="1" title="VP TSP" imgone={vptsp}
    textname="Sophie Ribault"
    text="Certains disent que c'est la force tranquille du groupe
     mais son vrai visage est tout autre car elle vous fera sévèrement regretter chacunes
     de vos boulettes. Maintenant qu'on le sait, tout le monde marche au pas...
     Donc merci Sophie ! (et nous frappe pas s'il-te-plaît)" />;
  let blockVP3 = <Block_Pole nbr="1" title="VP Bachelor" imgone={vpbachelor}
    textname="Albane Gavault"
    text="Petite pile dont l'énergie paraît inépuisable, elle booste la liste avec ses idées
    tout en étant à l'écoute de chacun. Heureuse dans le noyau dur, ce spécimen hypersensible
    à l'attitude paradoxale, peut paraître rêveuse, contemplative et parfois même très calme,
    mais attention à ne pas la vexer au risque de prendre un sacré coup de jus !" />;

    let firstBlock = <div>
        {blockPres}
      <div className="block_VP">
        <h3 className="title_vp">Vice-Présidence</h3>

        <div className="lign">

          <div className="element_grille_33">
            {blockVP1}
          </div>

          <div className="element_grille_33">
            {blockVP2}
          </div>

          <div className="element_grille_33">
            {blockVP3}
          </div>
          </div>
          </div>
          </div>;

    if(window.innerWidth <= 790) {
        firstBlock = <div className="mobile-swiper"><Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{blockPres}</SwiperSlide>
      <SwiperSlide>{blockVP1}</SwiperSlide>
      <SwiperSlide>{blockVP2}</SwiperSlide>
      <SwiperSlide>{blockVP3}</SwiperSlide>
    </Swiper>
    </div>
    }

    return(
      <div>
        <h1 className="page_title" > Quelques présentations... </h1>
        {firstBlock}
      </div>
    );
}
