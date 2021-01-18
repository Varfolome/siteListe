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

  let textPrev="La prévention de cette année a pour but, si la situation sanitaire le permet, d'enseigner une nouvelle façon de s'amuser en soirée tout en respectant sa santé et ses envies. La prévention sera également consciente des potentiels excès et débordements qui peuvent survenir, et fera tout son possible pour en minimiser les effets indésirables.";
  let textRits="Comme le dit si bien le dicton ''bonne mangeoire fait bonne fête'' c'est la bonne cuisine qui fait la bonne fête ! Vous ne serez jamais mieux servis que par nous, le pôle RITZ, puisque nous vivons d'amour, d'eau fraîche, d'entraide, et de bons petits plats !";
  let textRe="Toujours à l’affût d’opportunités, de faire valoir le bien-être et l’avenir des étudiants auprès des entreprises, le pôle RE fera tout son possible pour régaler le campus tout en répondant aux attentes de ses partenaires du monde de l’entreprise. De l’organisation d’événements ludique à buts professionnels à la proposition d’offres alléchantes, nous entendons mettre en relation les étudiants du campus et les entreprises de la manière la plus adaptée possible. Prêts à démarcher jusqu’au bout du monde, on arrive pour vous offrir le meilleur de nos poignées de mains.";
  let textSecret="Le secrétariat, le pôle de l'ombre ! En tant que secrétaires, nous participons très activement à la vie de la liste, en réalisant les compte-rendus de réunion, en s'occupant des documents administratifs, des ressources en ligne et nous aidons tous les autres pôles !";
  let textTres="Notre objectif est d'optimiser au maximum le budget de la trésorerie en l'utilisant de manière judicieuse. Un budget bien géré pour un campus plus dynamique. Rattrapons les dégâts de la COVID-19 !";

  if(props.lang === "english") {
    textPrev="The goal of this year's prevention is, if the health situation permits, to teach a new way of having fun in parties while respecting one's health and desires. Prevention will also be aware of the potential excesses and overflows that can occur, and will do everything possible to minimize the undesirable effects.";
    textRits="Satisfy your stomachs by making you discover our recipes while adapting to your tastes. Provide food stalls occasionally to have a little pick-me-up during your day.";
    textRe="Always on the lookout for opportunities to promote the well-being and future of students to companies, the corporate relations department will do its utmost to delight the campus while meeting the expectations of its partners in the corporate world. From organizing fun events for professional purposes to suggesting inciting offers, we intend to put campus students and companies in touch with each other in the most appropriate way possible. Ready to go to the ends of the earth, we come to offer you the best of our handshakes.";
    textSecret="The secretariat, the department of the shadow! As secretaries, we take a very active part in the life of the list, by realizing reports of meetings, taking care of administrative documents and online resources and we also help all the other departments!";
    textTres="Our aim is to optimize the treasury budget to its maximum by using it wisely. A well-managed budget for a more dynamic campus. Let's catch the damage of the COVID-19!";
  }

  let blockPrev =   <Block_Pole nbr="1" title="Prévention" imgone={prev}
      textname="Eloi"
      text={textPrev} />;
  let blockRits =   <Block_Pole nbr="2" title="Rits" imgone={resporits} imgtwo={rits}
      textname="Ella et Aya"
      text={textRits} />;
  let blockRE = <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
    textname="Louri et Belhassen"
    text={textRe} />;
  let blockSecret = <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
    textname="Kenza et Pierre"
    text={textSecret} />;
  let blockTres = <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
    textname="Fatima et Jahed"
    text={textTres} />;

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
      spaceBetween={30}
      slidesPerView={1.11}
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
