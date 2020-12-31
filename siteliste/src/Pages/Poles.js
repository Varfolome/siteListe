import React from 'react';

import './PagesStyles/Poles.css';
import Block_Pres from '../WidgetsAndElements/Block_Pres';
import Block_Pole from '../WidgetsAndElements/Block_Pole';

import pres from '../photos/img_mdp/pres.jpg'

import vpimtbs from '../photos/img_mdp/vpimtbs.jpg'
import vptsp from '../photos/img_mdp/vptsp.jpg'
import vpbachelor from '../photos/img_mdp/vpbachelor.jpg'

import resposoiree from '../photos/img_mdp/soireerespo.png'
import soiree1 from '../photos/img_mdp/soiree1.png'
import soiree2 from '../photos/img_mdp/soiree2.png'
import pougneimtbs from '../photos/img_mdp/pougneimtbs.png'
import pougnetsp from '../photos/img_mdp/pougnetsp.png'
import pougnebachelor from '../photos/img_mdp/pougnebachelor.png'

import num from '../photos/img_mdp/num.jpg'
import numrespo from '../photos/img_mdp/numrespo.jpg'
import sl from '../photos/img_mdp/sl.png'
import resposl from '../photos/img_mdp/slrespo.png'
import voyage from '../photos/img_mdp/voyage.png'
import respovoyage from '../photos/img_mdp/voyagerespo.png'

import dd from '../photos/img_mdp/dd.png'
import prev from '../photos/img_mdp/prevrespo.png'
import resporits from '../photos/img_mdp/ritsrespo.png'
import rits from '../photos/img_mdp/rits.png'

import respore from '../photos/img_mdp/rerespo.png'
import re from '../photos/img_mdp/re.png'
import resposecret from '../photos/img_mdp/secretrespo.png'
import secret from '../photos/img_mdp/secret.png'
import respotres from '../photos/img_mdp/tresrespo.png'
import tres from '../photos/img_mdp/tres.png'

import respocom from '../photos/img_mdp/comrespo.png'
import com from '../photos/img_mdp/com.png'
import swei from '../photos/img_mdp/swei.png'
import tema from '../photos/img_mdp/tema.png'







export default class Poles extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {


    return (
      <div className="poles">
        <h1 className="page_title" >Voici le mot des pôles </h1>
        <div>
          <Block_Pres title="Présidence" img={pres}
            textname="Ulysse Aubin"
            text="être président de liste ..." />

          <div className="block_VP">
            <h3 className="motdupole">Vice-Présidence</h3>

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
                  text="Duracell " />
              </div>

            </div>
            <h5 className="text_VP">
              Ensemble ils motiveront les troupes
            </h5>
          </div>

          <div className="grille">

            {/* soirée + pougne */}
            <div className="lign">

              <div className="element_grille_50">
                <Block_Pole nbr="3" title="Soirée" imgone={resposoiree} imgtwo={soiree1} imgthree={soiree2}
                  textname="Guillaume, Louis et Moncef"
                  text="blabla" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="3" title="Pougnes" imgone={pougneimtbs} imgtwo={pougnetsp} imgthree={pougnebachelor}
                  textname="Ludivine, Gaétan et Sarah"
                  text="Parce qu'on sait que la vie étudiante c'est beaucoup de temps en soirée et peu à réviser. Chez nous les pougnes on te propose une petite aide, un petit plus, qui t'aidera à passer ton année.
                  Tu n'as plus à t'inquiéter de tous ces cours ratés sur BBB, avec nous c'est fini les 1B et bienvenue le club B. Ne soit plus désolé pour hier soir, on sera là pour t'épauler lors des révisions.
                  Pougner c'est gagner !" />
              </div>

            </div>

            {/* Num + Séculog + Voyage */}
            <div className="lign">

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Numérique" imgone={numrespo} imgtwo={num}
                  textname="Thomas et Joshua"
                  text="On préfère faire de jeux
                mais on va qd même faire le site et l'appli, don't worry.
                Par contre ne croyez pas qu'on va staffer votre campagne numérique,
                même Guillaume peut le faire ;)" />
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
                  text="La prévention c'est le couteau suisse de ta soirée. T'as besoin d'alcool? on en a.
                  Tu veux te rincer la bouche parce que tu t'apprêtes à pécho, ou parce que t'as soif? on en a.
                  Tu veux prendre une banane pour tanker car t'as CF demain? on en a.
                  Tu veux parler à qqun pour une quelconque raison? on en a. Pardon, on est là. Rien que pour toi ❤️
                  Bonne soirée" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="2" title="Rits" imgone={resporits} imgtwo={rits}
                  textname="Ella et Aya"
                  text="manger" />
              </div>

            </div>

            {/* RE + secret + tres */}
            <div className="lign">

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
                  textname="Louri et Belhassen"
                  text="On préfère faire de jeux
                mais on va qd même faire le site et l'appli, don't worry.
                Par contre ne croyez pas qu'on va staffer votre campagne numérique,
                même Guillaume peut le faire ;)" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
                  textname="Kenza et Pierre"
                  text="Nous agissons dans l'ombre afin de protéger le monde, et par le monde, 
                  on veut principalement dire le sol et vos petites fesses avec de la moquette de qualité. 
                  On fait des créneaux aussi. " />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
                  textname="Fatima et Jahed"
                  text="Slt, c'est Elie et Yann, on partira ensemble un jour challah" />
              </div>

            </div>

            {/* Com + Swei + Tema */}
            <div className="lign">
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Communication" imgone={respocom} imgtwo={com}
                  textname="Léo et Quentin"
                  text="Photoshop ou After Effect ? Facebook ou Insta ? Pas besoin de choisir, 
                  la com utilise toutes ces appli pour créer et publier ses meilleures affiches et vidéos !
                  Que ça soit fougère ou écailles de serpent, on utilise nos meilleures fonds pour impressionner l’INT" />
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
                  text="Respo T&MA ? Le pôle le plus important. Dire que c'est un pôle pipo est une insulte. Cuisine,Tenture et Moquetter, tout le monde compte sur toi pour faire une tonne d'activités !!
                  Le seul problème, c'est que aucun de ca n'a de rapport avec les alumnis, et pour ça, ça me donne envie de pleurer..." />
              </div>
            </div>
            <div className="lign">

              <div className="element_grille_50">
                <Block_Pole nbr="1" title="Stand" imgone={dd}
                  textname="Mathis"
                  text="blabla" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="1" title="DD" imgone={dd}
                  textname="Denzel"
                  text="On préfère faire de jeux
                mais on va qd même faire le site et l'appli, don't worry.
                Par contre ne croyez pas qu'on va staffer votre campagne numérique,
                même Guillaume peut le faire ;)" />
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}
