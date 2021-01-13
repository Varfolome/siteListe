import './Styles/Poles.css';
import React from 'react';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import resposoiree from '../photos/img_mdp/soireerespo.jpg'
import soiree1 from '../photos/img_mdp/soiree1.jpg'
import soiree2 from '../photos/img_mdp/soiree2.jpg'
import pougnetsp from '../photos/img_mdp/pougnetsp.jpg'
import pougneimtbs from '../photos/img_mdp/pougneimtbs.jpg'
import pougnebachelor from '../photos/img_mdp/pougnebachelor.jpg'

import num from '../photos/img_mdp/num.jpg'
import numrespo from '../photos/img_mdp/numrespo.jpg'
import sl from '../photos/img_mdp/sl.jpg'
import resposl from '../photos/img_mdp/slrespo.jpg'
import voyage from '../photos/img_mdp/voyage.jpg'
import respovoyage from '../photos/img_mdp/voyagerespo.jpg'

export default function SecondBlock(props) {

  let blockSoiree =   <Block_Pole nbr="3" title="Soirée" imgone={resposoiree} imgtwo={soiree1} imgthree={soiree2}
      textname="Guillaume, Louis et Moncef"
      text="Le pôle Soirée c'est monter des dossiers en laissant parler sa créativité pour ambiancer
      des gens avec 3g dans le sang dans le seul but que le lendemain quand on te croisera
      en gueule de bois tu nous dise que <<c'était stylé>>. Au fait on fait aussi pleurer le trésorier." />;

  let blockPougnes = <Block_Pole nbr="3" title="Pougnes" imgone={pougneimtbs} imgtwo={pougnetsp} imgthree={pougnebachelor}
    textname="Ludivine, Gaétan et Sarah"
    text="Parce qu'on sait que la vie étudiante c'est beaucoup de temps en soirée et peu à réviser. Chez les pougnes, on te propose une petite aide, un petit plus, qui t'aidera à valider ton année.
    Tu n'as plus à t'inquiéter de tous ces cours ratés sur BBB, avec nous c'est fini les 1B et bienvenue les clubs B. Ne soit plus désolé pour hier soir, on sera là pour t'épauler lors des révisions.
    Pougner c'est gagner !" />;

  let secondBlock = <div className="lign">

    <div className="element_grille_50">
      <Block_Pole nbr="3" title="Soirée" imgone={resposoiree} imgtwo={soiree1} imgthree={soiree2}
        textname="Guillaume, Louis et Moncef"
        text="Le pôle Soirée c'est monter des dossiers en laissant parler sa créativité pour ambiancer
        des gens avec 3g dans le sang dans le seul but que le lendemain quand on te croisera
        en gueule de bois tu nous dise que <<c'était stylé>>. Au fait on fait aussi pleurer le trésorier." />
    </div>

    <div className="element_grille_50">
      <Block_Pole nbr="3" title="Pougnes" imgone={pougneimtbs} imgtwo={pougnetsp} imgthree={pougnebachelor}
        textname="Ludivine, Gaétan et Sarah"
        text="Parce qu'on sait que la vie étudiante c'est beaucoup de temps en soirée et peu à réviser. Chez les pougnes, on te propose une petite aide, un petit plus, qui t'aidera à valider ton année.
        Tu n'as plus à t'inquiéter de tous ces cours ratés sur BBB, avec nous c'est fini les 1B et bienvenue les clubs B. Ne soit plus désolé pour hier soir, on sera là pour t'épauler lors des révisions.
        Pougner c'est gagner !" />
    </div>

  </div>;

  if(window.innerWidth <= 790) {
      secondBlock = <div className="mobile-swiper"><Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>{blockSoiree}</SwiperSlide>
    <SwiperSlide>{blockPougnes}</SwiperSlide>
    <SwiperSlide>Blb</SwiperSlide>
    <SwiperSlide>Wtf</SwiperSlide>
  </Swiper>
  </div>
  }

  return(
    <div>
      {secondBlock}
    </div>
  );
}
