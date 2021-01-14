import './Styles/Poles.css';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import prev from '../photos/img_mdp/prevrespo.jpg';
import resporits from '../photos/img_mdp/ritsrespo.jpg';
import rits from '../photos/img_mdp/rits.jpg';
import respore from '../photos/img_mdp/rerespo.jpg';
import re from '../photos/img_mdp/re.jpg';
import resposecret from '../photos/img_mdp/secretrespo.jpg'
import secret from '../photos/img_mdp/secret.jpg'
import respotres from '../photos/img_mdp/tresrespo.jpg'
import tres from '../photos/img_mdp/tres.jpg'

export default function ThirdBlock(props) {

  let blockPrev =   <Block_Pole nbr="1" title="Prévention" imgone={prev}
      textname="Eloi"
      text="La prévention, c'est le couteau suisse de ta soirée. T'as besoin d'alcool ? On en a !
      Tu veux te rincer la bouche parce que tu t'apprêtes à pécho, ou parce que t'as soif ? On est là !
      Tu veux prendre une banane pour tanker car t'as CF demain ? On en a !
      Tu veux parler à quelqu'un pour une quelconque raison ? On est là !
      Enfin, plus ou moins... Dans tous les cas, rien que pour toi, nous sommes là pour
      te faire vivre tes meilleures soirées !" />;
  let blockRits =   <Block_Pole nbr="2" title="Rits" imgone={resporits} imgtwo={rits}
      textname="Ella et Aya"
      text="Comme le dit si bien le dicton <<bonne mangeoire fait bonne fête>>
      c'est la bonne cuisine qui fait la bonne fête ! Vous ne serez jamais mieux servis que par nous,
      le pôle RITZ, puisque nous vivons d'amour, d'eau fraîche, d'entraide, et de bons petits plats !" />;
  let blockRE = <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
    textname="Louri et Belhassen"
    text="Toujours à l’affût d’opportunités, de faire valoir le bien-être et l’avenir des étudiants
     auprès des entreprises, le pôle RE fera tout son possible pour régaler le campus tout en
     répondant aux attentes de ses partenaires du monde de l’entreprise. De l’organisation d’événements
     ludique à buts professionnels à la proposition d’offres alléchantes, nous entendons mettre en
     relation les étudiants du campus et les entreprises de la manière la plus adaptée possible.
     Prêts à démarcher jusqu’au bout du monde, on arrive pour vous offrir le meilleur de nos poignées de mains." />;
  let blockSecret = <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
    textname="Kenza et Pierre"
    text="Le secrétariat, le pôle de l'ombre ! En tant que secrétaires,
    nous participons très activement à la vie de la liste, en réalisant les compte-rendus de réunion,
    en s'occupant des documents administratifs, des ressources en ligne et nous aidons tous les autres pôles !" />;
  let blockTres = <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
    textname="Fatima et Jahed"
    text="Le pôle trésorerie s'occupe des fonds afin de permettre à tous les pôles de mener
    à bien leurs projets. Nous nous occupons des entrées et des sorties d'argent tout ça pour
     que tu puisses faire la mala à nos stands ou encore (et surtout) à nos soirées.
     Bref, notre seul objectif, c'est de brasser et t'as capté qu'on te parle pas de natation." />;

  let thirdBlock = <div className="grille">
  <div className="lign">

    <div className="element_grille_50">
      {blockPrev}
    </div>

    <div className="element_grille_50">
      {blockRits}
    </div>

  </div>

  <div className="lign">

    <div className="element_grille_33">
      {blockRE}
    </div>

    <div className="element_grille_33">
      {blockSecret}
    </div>

    <div className="element_grille_33">
      {blockTres}
    </div>

  </div>

  </div>;

  if(window.innerWidth <= 790) {
      thirdBlock = <div className="mobile-swiper"><Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>{blockPrev}</SwiperSlide>
    <SwiperSlide>{blockRits}</SwiperSlide>
    <SwiperSlide>{blockRE}</SwiperSlide>
    <SwiperSlide>{blockSecret}</SwiperSlide>
    <SwiperSlide>{blockTres}</SwiperSlide>
  </Swiper>
  </div>
  }

  return(
    <div>
      {thirdBlock}
    </div>
  );
}
