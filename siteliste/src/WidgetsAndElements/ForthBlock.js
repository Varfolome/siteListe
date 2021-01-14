import './Styles/Poles.css';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import dd from '../photos/img_mdp/dd.jpg'
import stand from '../photos/img_mdp/stand.jpg'


import respocom from '../photos/img_mdp/comrespo.jpg'
import com from '../photos/img_mdp/com.jpg'
import swei from '../photos/img_mdp/swei.jpg'
import tema from '../photos/img_mdp/tema.jpg'


export default function ForthBlock(props) {

    let blockCom = <Block_Pole nbr="2" title="Com" imgone={respocom} imgtwo={com}
      textname="Léo et Quentin"
      text="Photoshop ou After Effect ? Facebook ou Insta ? Pas besoin de choisir, la com' utilise toutes
       ces applications pour créer et publier ses meilleures affiches et vidéos !
       Que ça soit fougères ou écailles de serpent, on utilise nos meilleures fonds pour impressionner l’INT" />;

    let blockSWEI = <Block_Pole nbr="1" title="SWEI" imgone={swei}
      textname="Emma"
      text="SEI, WEI pas l'temps d'niaiser...fin une fois qu'on aura gagné,
      en attendant tu passes des coups de mains aux pôles en besoin d'aides.
      Une fois la victoire remportée, tout l'int compte sur toi pour leur offrir
      les meilleurs moments de leur scolarité <3 " />;

    let blockTema = <Block_Pole nbr="1" title="T&MA" imgone={tema}
      textname="Léonard"
      text="Respo T&MA ? Le pôle le plus important. Dire que c'est un pôle pipo est une insulte.
      Cuisiner, tenturer et moquetter, tout le monde compte sur toi pour faire une tonne d'activités !
      Le seul problème, c'est qu'aucune de ces activités n'a de rapport avec les alumnis,
      et c'est pour cela qu'on est ici toute la nuit !" />;

    let blockStand = <Block_Pole nbr="1" title="Stand" imgone={stand}
      textname="Matthis"
      text="Qui suis-je ? Tu dois me faire avec passion. Je remplis le ventre de morfales
      tout en les divertissant de façons toujours plus originales. Si je ne propose pas de prix à gagner,
       personne ne vient me voir. J'existe avant et pendant la campagne, après je ne suis plus.
       Je suis, je suis, je suis ? Le stand ! Et voici un bidon de Monaga pour toi !" />;

    let blockDD = <Block_Pole nbr="1" title="DD" imgone={dd}
      textname="Denzel"
      text="Pôle DD, ici tout est bio, tout est fraîs ! Je suis là pour rajouter un peu (beaucoup)
      de verdure à l'INT. Expert en gazon et en plantation de tomates, embellir ce campus :
      telle est ma mission ! Ah oui, et sauver la planète aussi, accessoirement." />;

    let forthBlock = <div className="grille">
    <div className="lign">
      <div className="element_grille_33">
      {blockCom}
      </div>
      <div className="element_grille_33">
      {blockSWEI}
      </div>
      <div className="element_grille_33">
      {blockTema}
      </div>
    </div>
    <div className="lign">

      <div className="element_grille_50">
      {blockStand}
      </div>

      <div className="element_grille_50">
      {blockDD}
      </div>

    </div>
    </div>;

    if(window.innerWidth <= 790) {
        forthBlock = <div className="mobile-swiper"><Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{blockCom}</SwiperSlide>
      <SwiperSlide>{blockSWEI}</SwiperSlide>
      <SwiperSlide>{blockTema}</SwiperSlide>
      <SwiperSlide>{blockStand}</SwiperSlide>
      <SwiperSlide>{blockDD}</SwiperSlide>
    </Swiper>
    </div>
    }

    return(
      <div>
        {forthBlock}
      </div>
    );
}
