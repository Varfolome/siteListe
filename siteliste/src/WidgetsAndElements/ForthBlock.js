import './Styles/Poles.css';
import Block_Pole from './Block_Pole';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import dd from '../photos/img_mdp/dd.jpg'
import stand from '../photos/img_mdp/stand.jpg'


// import respocom from '../photos/img_mdp/comrespo.jpg'
// import com from '../photos/img_mdp/com.jpg'
import comm from '../photos/img_mdp/comm.jpg'
import swei from '../photos/img_mdp/swei.jpg'
import tema from '../photos/img_mdp/tema.jpg'


export default function ForthBlock(props) {

  let textCom = "Photoshop ou After Effect ? Facebook ou Insta ? Pas besoin de choisir, la com' utilise toutes ces applications pour créer et publier ses meilleures affiches et vidéos ! Que ça soit fougères ou écailles de serpent, on utilise nos meilleures fonds pour impressionner l’INT ";
  let textSWEI = "SEI, WEI pas l'temps d'niaiser... Enfin une fois qu'on aura gagné, en attendant, tu passes des coups de mains aux pôles en nécessité. Une fois la victoire remportée, tout l'INT compte sur toi pour leur offrir les meilleurs moments de leur scolarité !";
  let textTema = "Respo T&MA ? Le pôle le plus important. Dire que c'est un pôle pipo est une insulte. Cuisiner, tenturer et moquetter, tout le monde compte sur toi pour faire une tonne d'activités ! Le seul problème, c'est qu'aucune de ces activités n'a de rapport avec les alumnis, et c'est pour cela qu'on est ici toute la nuit !";
  let textStand = "Qui suis-je ? Tu dois me faire avec passion. Je remplis le ventre de morfales tout en les divertissant de façons toujours plus originales. Si je ne propose pas de prix à gagner, personne ne vient me voir. J'existe avant et pendant la campagne, après je ne suis plus. Je suis, je suis, je suis ? Le stand ! Et voici un bidon de Monaga pour toi !";
  let textDD = "Pôle DD, ici tout est bio, tout est fraîs ! Je suis là pour rajouter un peu (beaucoup) de verdure à l'INT. Expert en gazon et en plantation de tomates, embellir ce campus : telle est ma mission ! Ah oui, et sauver la planète aussi, accessoirement.";

  if (props.lang === "english") {
    textCom = "Photoshop or After Effect ? Facebook or Instagram ? No need to choose, the communications department uses all these applications to create and publish their best posters and videos! Whether it be leafs or snake scales, we use our best backgrounds to impress the INT.";
    textSWEI = "SEI, WEI no time to fool around... once we win, in the meantime, you give a hand to the departments in need. After the victory, the whole INT counts on you to offer them the best moments of their schooling!";
    textTema = "Respo T&MA ? The most important department. To say it's a load of rubbish is an insult. Cooking, painting and carpetting, everyone is counting on you to do a ton of activities! The only problem is that none of these have anything to do with alumnis, and that's why we're here all night long!";
    textStand = "Who am I? You experience me with passion ";
    textDD = "DD department, everything is organic, everything is fresh! I'm here to add a little (a lot) of greenery to the INT. Expert in lawn and tomato planting, embellish this campus: that is my mission! Ah yes, and save the planet too, incidentally.";
  }

  let blockCom = <Block_Pole nbr="1" title="Com"
    // imgone={respocom} imgtwo={com}
    imgone={comm}
    textname="Léo et Quentin"
    text={textCom} />;

  let blockSWEI = <Block_Pole nbr="1" title="SWEI" imgone={swei}
    textname="Emma"
    text={textSWEI} />;

  let blockTema = <Block_Pole nbr="1" title="T&MA" imgone={tema}
    textname="Léonard"
    text={textTema} />;

  let blockStand = <Block_Pole nbr="1" title="Stand" imgone={stand}
    textname="Matthis"
    text={textStand} />;

  let blockDD = <Block_Pole nbr="1" title="DD" imgone={dd}
    textname="Denzel"
    text={textDD} />;

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

  if (window.innerWidth <= 790) {
    forthBlock = <div className="mobile-swiper"><Swiper
      spaceBetween={30}
      slidesPerView={1.3}
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

  return (
    <div>
      {forthBlock}
    </div>
  );
}
