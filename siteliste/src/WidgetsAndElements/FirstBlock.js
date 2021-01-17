import './Styles/Poles.css';
import Block_Pres from './Block_Pres';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import pres from '../photos/img_mdp/pres.jpg'

import vpimtbs from '../photos/img_mdp/vpimtbs.jpg'
import vptsp from '../photos/img_mdp/vptsp.jpg'
import vpbachelor from '../photos/img_mdp/vpbachelor.jpg'


export default function FirstBlock(props) {

  let textPres = "Afin que le navire arrive à destination, Ulysse peut compter sur ses VP pour l’aider à guider le reste de l’équipage à travers la mer déchainée qu’est l’INT ! Mais avec leurs idées toutes plus folles les unes que les autres, on se demande parfois qui devrait être attaché au mât…";
  let textPres2 = "Ulysse, le président : rationnel, pragmatique, et efficace. Il opère avec un ratio énergie/sommeilimbattable.";
  let textVP1 = "Aussi grand que drôle, derrière son manque de tact se cache une honnêteté sans faille et l’envie de toujours faire mieux. Sa bienveillance est naturelle, mais mieux vaut ne pas trop le décevoir";
  let textVP2 = "Certains disent que c'est la force tranquille du groupe, mais son vrai visage est tout autre car elle vous fera sévèrement regretter chacunes de vos boulettes. Maintenant qu'on le sait, tout le monde marche au pas... Donc merci Sophie ! (et nous frappe pas s'il-te-plaît)";
  let textVP3 = "Petite pile dont l'énergie paraît inépuisable, elle booste la liste avec ses idées tout en étant à l'écoute de chacun. Heureuse dans le noyau dur, ce spécimen hypersensible à l'attitude paradoxale peut paraître rêveuse, contemplative et parfois même très calme, mais attention à ne pas la vexer au risque de prendre un sacré coup de jus !";


  if(props.lang === "english") {
    textPres = "In order for the ship to reach its destination, Ulysse can count on his VPs to help him guide the rest of the crew through the raging sea that is INT! But with their ideas, each one crazier than the other, one sometimes wonders who should be attached to the mast..";
    textPres2 = "Ulysse, the president : rational, pragmatic and efficient. He runs on a an unmatched energy to sleep ratio.";
    textVP1 = "As tall as he is funny, behind his lack of tact hides a flawless honesty and a want to constanty improve. His affection is natural";
    textVP2 = "Some say she is the quiet strength of the group, but her true face is quite different because she will make you severely regret each of your mistakes. Now that we know this, everyone keeps pace... So thank you Sophie! (and please don't hit us)";
    textVP3 = "Small battery whose energy seems inexhaustible, she boosts the list with her ideas while listening to everyone. Happy in the core, this hypersensitive specimen with a paradoxical attitude may seem dreamy, contemplative and sometimes even very calm, but be careful not to offend her at the risk of taking a big punch !";
  }

  let blockPres = <Block_Pres title="Présidence" img={pres}
    textname="Ulysse Aubin"
    text={textPres}
    text2={textPres2} />;
  let blockVP1 = <Block_Pole nbr="1" title="VP IMT-BS" imgone={vpimtbs}
    textname="Grégory Le Moal"
    text={textVP1} />;
  let blockVP2 = <Block_Pole nbr="1" title="VP TSP" imgone={vptsp}
    textname="Sophie Ribault"
    text={textVP2} />;
  let blockVP3 = <Block_Pole nbr="1" title="VP Bachelor" imgone={vpbachelor}
    textname="Albane Gavault"
    text={textVP3} />;

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
        firstBlock = <div className="mobile-swiper">
        <h2 className="swipe-attention">Swipez</h2>
        <Swiper
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
