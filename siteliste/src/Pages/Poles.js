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
            text="Coucou c'est Ulysse, je suis le président de la liste Naga" />

          <div className="block_VP">
            <h3 className="motdupole">Vice-Présidence</h3>

            <div className="lign_three_cards">

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP IMT-BS" imgone={vpimtbs}
                  text="Slt, c'est Grego " />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP TSP" imgone={vptsp}
                  text="Slt, c'est Sophinatrice " />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="1" title="VP Bachelor" imgone={vpbachelor}
                  text="Slt, c'est Albane " />
              </div>

            </div>
            <h5 className="text_pres">
              Ensemble ils motiveront les troupes
            </h5>
          </div>

          <div className="grille">

            {/* soirée + pougne */}
            <div className="lign_two_cards">

              <div className="element_grille_50">
                <Block_Pole nbr="3" title="Soirée" imgone={resposoiree} imgtwo={soiree1} imgthree={soiree2}
                  text="Slt, c'est le noyau dur, Louis et Moncef" />
              </div>

              <div className="element_grille_50">
                <Block_Pole nbr="3" title="Pougnes" imgone={pougneimtbs} imgtwo={pougnetsp} imgthree={pougnebachelor}
                  text="Slt, c'est Léo et Quentin" />
              </div>

            </div>

            {/* Num + Séculog + Voyage */}
            <div className="lign_three_cards">

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Num" imgone={num} imgtwo={numrespo}
                  text="Slt, c'est Thomas et Josh, on préfère faire de jeux
                mais on va qd même faire le site et l'appli, don't worry.
                Par contre ne croyez pas qu'on va staffer votre campagne numérique,
                même Guillaume peut le faire ;)" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Séculog" imgone={resposl} imgtwo={sl}
                  text="Slt, c'est Jérémy et Luka, on drive et moquette comme jaja" />
              </div>

              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Voyage" imgone={respovoyage} imgtwo={voyage}
                  text="Slt, c'est Elie et Yann, on partira ensemble un jour challah" />
              </div>

            </div>

            {/* DD + Prevention + rits */}
            <div className="lign_three_cards">
              <div className="element_grille_33">
                <Block_Pole nbr="1" title="DD" imgone={dd}
                  text="Slt, c'est Denzel" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="1" title="Prévention" imgone={prev}
                  text="Slt, c'est Eloi" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Rits" imgone={resporits} imgtwo={rits}
                  text="Slt, c'est Ella et Aya" />
              </div>
            </div>

            {/* RE + secret + tres */}
            <div className="lign_three_cards">
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
                  text="Slt, c'est Louri et Belhassen" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
                  text="Slt, c'est Kenza et Pierre" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
                  text="Slt, c'est Fatima et Jahed" />
              </div>
            </div>

            {/* RE + secret + tres */}
            <div className="lign_three_cards">
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="RE" imgone={respore} imgtwo={re}
                  text="Slt, c'est Louri et Belhassen" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Secrétariat" imgone={resposecret} imgtwo={secret}
                  text="Slt, c'est Kenza et Pierre" />
              </div>
              <div className="element_grille_33">
                <Block_Pole nbr="2" title="Trésorerie" imgone={respotres} imgtwo={tres}
                  text="Slt, c'est Fatima et Jahed" />
              </div>
            </div>


          </div>

        </div>
      </div>
    );
  }
}
