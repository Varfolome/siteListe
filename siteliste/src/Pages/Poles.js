import React from 'react';

import './PagesStyles/Poles.css';
import Block_Pres from '../WidgetsAndElements/Block_Pres';
import Block_Pole from '../WidgetsAndElements/Block_Pole';

import pres from '../photos/img_mdp/pres.jpg'

import vpimtbs from '../photos/img_mdp/vpimtbs.jpg'
import vptsp from '../photos/img_mdp/vptsp.jpg'
import vpbachelor from '../photos/img_mdp/vpbachelor.jpg'

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

import dd from '../photos/img_mdp/dd.jpg'
import stand from '../photos/img_mdp/stand.jpg'
import prev from '../photos/img_mdp/prevrespo.jpg'
import resporits from '../photos/img_mdp/ritsrespo.jpg'
import rits from '../photos/img_mdp/rits.jpg'

import respore from '../photos/img_mdp/rerespo.jpg'
import re from '../photos/img_mdp/re.jpg'
import resposecret from '../photos/img_mdp/secretrespo.jpg'
import secret from '../photos/img_mdp/secret.jpg'
import respotres from '../photos/img_mdp/tresrespo.jpg'
import tres from '../photos/img_mdp/tres.jpg'

import respocom from '../photos/img_mdp/comrespo.jpg'
import com from '../photos/img_mdp/com.jpg'
import swei from '../photos/img_mdp/swei.jpg'
import tema from '../photos/img_mdp/tema.jpg'







export default class Poles extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {


    return (
      <div className="poles">
        <h1 className="page_title" > Quelques présentations... </h1>
        <div>
          <Block_Pres title="Présidence" img={pres}
            textname="Ulysse Aubin"
            text="Afin que le navire arrive à destination, Ulysse peut compter sur ses VP pour l’aider à guider
            le reste de l’équipage à travers la mer déchainée qu’est l’INT ! Mais avec leurs idées toutes plus folles
            les unes que les autres, on se demande parfois qui devrait être attaché au mât…"
            text2="Ulysse, le président : rationnel, pragmatique, et efficace.
            Il opère avec un ratio énergie/sommeil imbattable." />

          <div className="block_VP">
            <h3 className="title_vp">Vice-Présidence</h3>

            <div className="lign">

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP IMT-BS" imgone={vpimtbs}
                  textname="Grégory Le Moal"
                  text="Aussi grand que drôle, derrière son manque de tact
                  se cache une honnêteté sans faille et l’envie de toujours faire mieux.
                  Sa bienveillance est naturelle, mais mieux vaut ne pas trop le décevoir. " />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP TSP" imgone={vptsp}
                  textname="Sophie Ribault"
                  text="Certains disent que c'est la force tranquille du groupe
                   mais son vrai visage est tout autre car elle vous fera sévèrement regretter chacunes
                   de vos boulettes. Maintenant qu'on le sait, tout le monde marche au pas...
                   Donc merci Sophie ! (et nous frappe pas s'il-te-plaît)" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP Bachelor" imgone={vpbachelor}
                  textname="Albane Gavault"
                  text="Petite pile dont l'énergie paraît inépuisable, elle booste la liste avec ses idées
                  tout en étant à l'écoute de chacun. Heureuse dans le noyau dur, ce spécimen hypersensible
                  à l'attitude paradoxale, peut paraître rêveuse, contemplative et parfois même très calme,
                  mais attention à ne pas la vexer au risque de prendre un sacré coup de jus !" />
              </div>

            </div>
            <h5 className="text_VP">
            Un bon équilibre des forces pour un maximum d'efficacité et d'organisation
            </h5>
          </div>

          <div className="grille">

            {/* soirée + pougne */}
            <div className="lign">

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

            </div>

            {/* Num + Séculog + Voyage */}
            <div className="lign">

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Numérique" imgone={numrespo} imgtwo={num}
                  textname="Thomas et Joshua"
                  text="On préfère faire de jeux. mais on va qd même faire le site et l'appli, don't worry.
                  Le seul souci c'est que comme on travaille derrière nos ordis, on ne nous voit pas bosser
                  alors tout le monde nous demande des trucs !" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Séculog" imgone={resposl} imgtwo={sl}
                  textname="Jérémy et Luka"
                  text="Nous agissons dans l'ombre afin de protéger le monde, et par le monde,
                  on veut principalement dire le sol et vos petites fesses avec de la moquette de qualité.
                  On fait des créneaux aussi. " />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Voyage" imgone={respovoyage} imgtwo={voyage}
                  textname="Elie et Yann"
                  text="On partira ensemble un jour challah" />
              </div>

            </div>

            {/* DD + Prevention + rits */}
            <div className="lign">

              <div className="element_grille_50">
                <Block_Pole nbr="1" title="Prévention" imgone={prev}
                  textname="Eloi"
                  text="La prévention, c'est le couteau suisse de ta soirée. T'as besoin d'alcool ? On en a !
                  Tu veux te rincer la bouche parce que tu t'apprêtes à pécho, ou parce que t'as soif ? On est là !
                  Tu veux prendre une banane pour tanker car t'as CF demain ? On en a !
                  Tu veux parler à quelqu'un pour une quelconque raison ? On est là !
                  Enfin, plus ou moins... Dans tous les cas, rien que pour toi, nous sommes là pour
                  te faire vivre tes meilleures soirées !" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="2" title="Rits" imgone={resporits} imgtwo={rits}
                  textname="Ella et Aya"
                  text="Comme le dit si bien le dicton <<bonne mangeoire fait bonne fête>>
                  c'est la bonne cuisine qui fait la bonne fête ! Vous ne serez jamais mieux servis que par nous,
                  le pôle RITZ, puisque nous vivons d'amour, d'eau fraîche, d'entraide, et de bons petits plats !" />
              </div>

            </div>

            {/* RE + secret + tres */}
            <div className="lign">

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
                  textname="Louri et Belhassen"
                  text="Toujours à l’affût d’opportunités, de faire valoir le bien-être et l’avenir des étudiants
                   auprès des entreprises, le pôle RE fera tout son possible pour régaler le campus tout en
                   répondant aux attentes de ses partenaires du monde de l’entreprise. De l’organisation d’événements
                   ludique à buts professionnels à la proposition d’offres alléchantes, nous entendons mettre en
                   relation les étudiants du campus et les entreprises de la manière la plus adaptée possible.
                   Prêts à démarcher jusqu’au bout du monde, on arrive pour vous offrir le meilleur de nos poignées de mains." />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
                  textname="Kenza et Pierre"
                  text="Le secrétariat, le pôle de l'ombre ! En tant que secrétaires,
                  nous participons très activement à la vie de la liste, en réalisant les compte-rendus de réunion,
                  en s'occupant des documents administratifs, des ressources en ligne et nous aidons tous les autres pôles !" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
                  textname="Fatima et Jahed"
                  text="Le pôle trésorerie s'occupe des fonds afin de permettre à tous les pôles de mener
                  à bien leurs projets. Nous nous occupons des entrées et des sorties d'argent tout ça pour
                   que tu puisses faire la mala à nos stands ou encore (et surtout) à nos soirées.
                   Bref, notre seul objectif, c'est de brasser et t'as capté qu'on te parle pas de natation." />
              </div>

            </div>

            {/* Com + Swei + Tema */}
            <div className="lign">
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Com" imgone={respocom} imgtwo={com}
                  textname="Léo et Quentin"
                  text="Photoshop ou After Effect ? Facebook ou Insta ? Pas besoin de choisir, la com' utilise toutes
                   ces applications pour créer et publier ses meilleures affiches et vidéos !
                   Que ça soit fougères ou écailles de serpent, on utilise nos meilleures fonds pour impressionner l’INT" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="1" title="SWEI" imgone={swei}
                  textname="Emma"
                  text="SEI, WEI pas l'temps d'niaiser...fin une fois qu'on aura gagné,
                  en attendant tu passes des coups de mains aux pôles en besoin d'aides.
                  Une fois la victoire remportée, tout l'int compte sur toi pour leur offrir
                  les meilleurs moments de leur scolarité <3 " />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="1" title="T&MA" imgone={tema}
                  textname="Léonard"
                  text="Respo T&MA ? Le pôle le plus important. Dire que c'est un pôle pipo est une insulte.
                  Cuisiner, tenturer et moquetter, tout le monde compte sur toi pour faire une tonne d'activités !
                  Le seul problème, c'est qu'aucune de ces activités n'a de rapport avec les alumnis,
                  et c'est pour cela qu'on est ici toute la nuit !" />
              </div>
            </div>
            <div className="lign">

              <div className="element_grille_50">
                <Block_Pole nbr="1" title="Stand" imgone={stand}
                  textname="Matthis"
                  text="Qui suis-je ? Tu dois me faire avec passion. Je remplis le ventre de morfales
                  tout en les divertissant de façons toujours plus originales. Si je ne propose pas de prix à gagner,
                   personne ne vient me voir. J'existe avant et pendant la campagne, après je ne suis plus.
                   Je suis, je suis, je suis ? Le stand ! Et voici un bidon de Monaga pour toi !" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="1" title="DD" imgone={dd}
                  textname="Denzel"
                  text="Pôle DD, ici tout est bio, tout est fraîs ! Je suis là pour rajouter un peu (beaucoup)
                  de verdure à l'INT. Expert en gazon et en plantation de tomates, embellir ce campus :
                  telle est ma mission ! Ah oui, et sauver la planète aussi, accessoirement." />
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}
