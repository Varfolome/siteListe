import './Styles/Poles.css';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import resposoiree from '../photos/img_mdp/soireerespo.jpg'
import soiree1 from '../photos/img_mdp/soiree1.jpg'
import soiree2 from '../photos/img_mdp/soiree2.jpg'
// import pougnetsp from '../photos/img_mdp/pougnetsp.jpg'
// import pougneimtbs from '../photos/img_mdp/pougneimtbs.jpg'
// import pougnebachelor from '../photos/img_mdp/pougnebachelor.jpg'
import pougne from '../photos/img_mdp/pougne3.jpg'

import num from '../photos/img_mdp/num.jpg'
import numrespo from '../photos/img_mdp/numrespo.jpg'
import sl from '../photos/img_mdp/sl.jpg'
import resposl from '../photos/img_mdp/slrespo.jpg'
import voyage from '../photos/img_mdp/voyage.jpg'
import respovoyage from '../photos/img_mdp/voyagerespo.jpg'

export default function SecondBlock(props) {

  let textSoiree = "Le pôle Soirée c'est monter des dossiers en laissant parler sa créativité pour ambiancer des gens avec 3g dans le sang dans le seul but que le lendemain quand on te croisera en gueule de bois tu nous dise que ''c'était stylé ! ''. Au fait on fait aussi pleurer le trésorier.";
  let textPougnes = "Parce qu'on sait que la vie étudiante c'est beaucoup de temps en soirée et peu à réviser. Chez les pougnes, on te propose une petite aide, un petit plus, qui t'aidera à valider ton année. Tu n'as plus à t'inquiéter de tous ces cours ratés sur BBB, avec nous c'est fini les 1B et bienvenue les clubs B. Ne soit plus désolé pour hier soir, on sera là pour t'épauler lors des révisions. Pougner c'est gagner !";
  let textNum = "On préfère faire de jeux. mais on va qd même faire le site et l'appli, don't worry. Le seul souci c'est que comme on travaille derrière nos ordis, on ne nous voit pas bosser alors tout le monde nous demande des trucs !";
  let textSecu = "Nous agissons dans l'ombre afin de protéger le monde, et par le monde, on veut principalement dire le sol et vos petites fesses avec de la moquette de qualité. On fait des créneaux aussi.";
  let textVoyage = "Aloha, nous c’est le pôle voyage! J’espère pouvoir vous organiser de magnifiques voyages! On fera sûrement des bons pour que vous y ayiez droit dans 10 ans quand le coronavirus ne sera plus qu’un mauvais souvenir. Plus sérieusement, je pense que tout le monde aura besoin d’évasion l’année prochaine et j’espère pouvoir vous faire vivre de belles aventures. Kusjes !";



  if (props.lang === "english") {
    textSoiree = "Let the 'Pole Soirée' flourish your creativity to have parties with people with 3g in blood for the only purpose that the next day when we meet you in hangover you tell us that 'it was stylish'. By the way, we also make the treasurer cry.";
    textPougnes = "Because we know that student life consists of many parties and little time to study, we pougnes offer you some help, a little extra, that will help you validate your year. You don't have to worry about all those missed classes on BBB, with us say bye to 1B and welcome to club B. Don't be sorry about last night, we'll be there to help you with your exams. To 'pougne' is to win!";
    textNum = "We obviously prefer to create games. but we'll still make a beautiful website and an app, don't worry. The only concern is that as we work behind our computers, they think we are lazy so everyone asks us for stuff!";
    textSecu = "We act in the shadows to protect the world, and by the world, we mean mostly the floor and your little buttocks with quality carpet. We're doing niches, too.";
    textVoyage = "Aloha, we are the travel department! I hope i will be able to organize wonderful trips for you! We will surely make vouchers so that you will have access to them in 10 years when the coronavirus will only be a bad memory. More seriously, I think that everyone will need to escape next year and I hope i will be able to make you live beautiful adventures. Kusjes!";
  }

  let blockSoiree = <Block_Pole nbr="3" title="Soirée" imgone={resposoiree} imgtwo={soiree1} imgthree={soiree2}
    textname="Guillaume, Louis et Moncef"
    text={textSoiree} />;

  let blockPougnes = <Block_Pole nbr="1" title="Pougnes"
    // imgone={pougneimtbs} imgtwo={pougnetsp} imgthree={pougnebachelor}
    imgone={pougne}
    textname="Ludivine, Gaétan et Sarah"
    text={textPougnes} />;

  let blockNum = <Block_Pole nbr="2" title="Numérique" imgone={numrespo} imgtwo={num}
    textname="Thomas et Joshua"
    text={textNum} />;
  let blockSecu = <Block_Pole nbr="2" title="Séculog" imgone={resposl} imgtwo={sl}
    textname="Jérémy et Luka"
    text={textSecu} />;
  let blockVoyage = <Block_Pole nbr="2" title="Voyage" imgone={respovoyage} imgtwo={voyage}
    textname="Elie et Yann"
    text={textVoyage} />;

  let secondBlock = <div className="grille">
    <div className="lign">

      <div className="element_grille_50">
        {blockSoiree}
      </div>

      <div className="element_grille_50">
        {blockPougnes}
      </div>

    </div>

    <div className="lign">

      <div className="element_grille_33">
        {blockNum}
      </div>

      <div className="element_grille_33">
        {blockSecu}
      </div>

      <div className="element_grille_33">
        {blockVoyage}
      </div>

    </div>


  </div>;

  if (window.innerWidth <= 790) {
    secondBlock = <div className="mobile-swiper"><Swiper
      spaceBetween={30}
      slidesPerView={1.11}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{blockSoiree}</SwiperSlide>
      <SwiperSlide>{blockPougnes}</SwiperSlide>
      <SwiperSlide>{blockNum}</SwiperSlide>
      <SwiperSlide>{blockSecu}</SwiperSlide>
      <SwiperSlide>{blockVoyage}</SwiperSlide>
    </Swiper>
    </div>
  }

  return (
    <div>
      {secondBlock}
    </div>
  );
}
