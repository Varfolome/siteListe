import React from 'react';
import './PagesStyles/Mots des pôles.css';

import pres from '../photos/img_mdp/pres.jpg'

import vpimtbs from '../photos/img_mdp/vpimtbs.jpg'
import vptsp from '../photos/img_mdp/vptsp.jpg'
import vpbachelor from '../photos/img_mdp/vpbachelor.jpg'

import num from '../photos/img_mdp/num.jpg'
import responum from '../photos/img_mdp/responum.jpg'

import sl from '../photos/img_mdp/num.jpg'
import resposl from '../photos/img_mdp/responum.jpg'

import voyage from '../photos/img_mdp/num.jpg'
import respovoyage from '../photos/img_mdp/responum.jpg'



export default class Mots_des_poles extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Voici le mot des pôles </h1>
        <div>
          
          <div className="block_pres">
            <h3 className="motdupole">Mot du Président </h3>
            <div className="imgtext_pres">
              <h5 className="text_pres">Coucou c'est Ulysse, je suis le président de 
                la liste Naga 
              </h5>
              <img src={pres} className="img_pres" alt="Ulysse" title="Président Ulysse" />
            </div>
          </div>

          <div className="block_pres">
            <h3 className="motdupole">Mot des VPs</h3>

            <div className="lign">

              <div className="block">
                <h3 className="motdupole">VP IMT-BS </h3>
                <div className="imgtext">
                  <img src={vpimtbs} className="img_vp" alt="VP IMT-BS" title="VP IMT-BS" />
                  <h5 className="text">Slt, c'est Grego </h5>
                </div>
              </div>

              <div className="block">
                <h3 className="motdupole">VP TSP </h3>
                <div className="imgtext">
                  <img src={vptsp} className="img_vp" alt="VP TSP" title="VP TSP" />
                  <h5 className="text">Slt, c'est Sophinatrice </h5>
                </div>
              </div>

              <div className="block">
                <h3 className="motdupole">VP Bachelor </h3>
                <div className="imgtext">
                  <img src={vpbachelor} className="img_vp" alt="VP Bachelor" title="VP Bachelor" />
                  <h5 className="text">Slt, c'est Albane</h5>
                </div>
              </div>
            
            </div>
            <h5 className="text_pres">
              Ensemble ils motiveront les troupes
            </h5>
          </div>

          <div className="grille">

            <div className="lign">

              <div className="block">
                <h3 className="motdupole">Mot des résoi </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={num} className="img_pole" alt="pôle Soirée" title="pôle Soirée" />
                    <img src={vpbachelor} className="img_pole" alt="VP Bachelor" title="VP Bachelor" />
                    <img src={responum} className="img_pole" alt="pôle Soirée" title="pôle Soirée" />
                  </div>
                  <h5 className="text">Slt, c'est le pole soirée </h5>
                </div>
              </div>

              <div className="block">
                <h3 className="motdupole">Mot de la com </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={sl} className="img_pole" alt="pôle com" title="pôle com" />
                    <img src={resposl} className="img_pole" alt="pôle com" title="pôle com" />
                  </div>
                  <h5 className="text">Slt, c'est le pôle com </h5>
                </div>
              </div>
            
            </div>

            <div className="lign">

              <div className="block">
                <h3 className="motdupole"> Mot des bgs du pôle num </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={num} className="img_pole" alt="pôle num" title="pôle num" />
                    <img src={responum} className="img_pole" alt="pôle num" title="pôle num" />
                  </div>
                  <h5 className="text">Slt, c'est Thomas et Josh, on préfère faire de jeux
                    mais on va qd même faire le site et l'appli, don't worry. 
                    Par contre ne croyez pas qu'on va se staffer votre campagne numérique, 
                    même Guillaume peut le faire ;)
                  </h5>
                </div>
              </div>

              <div className="block">
                <h3 className="motdupole">Mot des séculog </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={sl} className="img_pole" alt="pôle sl" title="pôle sl" />
                    <img src={resposl} className="img_pole" alt="respo sl" title="respo sl" />
                  </div>
                  <h5 className="text">Slt, c'est Jérémy et Luka, on drive et moquette comme jaja </h5>
               </div>
              </div>

              <div className="block">
                <h3 className="motdupole">Mot des voyageurs </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={voyage} className="img_pole" alt="pôle voyage" title="pôle voyage" />
                    <img src={respovoyage} className="img_pole" alt="respo sl" title="respo sl" />
                  </div>
                  <h5 className="text">Slt, c'est Elie et Yann, on partira ensemble un jour challah </h5>
               </div>
              </div>

            </div>

            <div className="lign">

              <div className="block">
                <h3 className="motdupole"> Mot du grand prév </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={num} className="img_pole" alt="pôle prév" title="pôle prév" />
                    <img src={responum} className="img_pole" alt="pôle prév" title="pôle prév" />
                  </div>
                  <h5 className="text">Slt, c'est Éloi et Léonard
                  </h5>
                </div>
              </div>

              <div className="block">
                <h3 className="motdupole">Mot des Rits </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={sl} className="img_pole" alt="pôle rits" title="pôle rits" />
                    <img src={resposl} className="img_pole" alt="respo rits" title="respo rits" />
                  </div>
                  <h5 className="text">Slt, c'est Ella et Aya </h5>
               </div>
              </div>

              <div className="block">
                <h3 className="motdupole">Mot des RE </h3>
                <div className="imgtext">
                  <div className="photos">
                    <img src={voyage} className="img_pole" alt="pôle RE" title="pôle RE" />
                    <img src={respovoyage} className="img_pole" alt="respo RE" title="respo RE" />
                  </div>
                  <h5 className="text">Slt, c'est Louri et Lucie </h5>
               </div>
              </div>

            </div>
            
          </div>

        </div>
      </div>
    );
  }
}