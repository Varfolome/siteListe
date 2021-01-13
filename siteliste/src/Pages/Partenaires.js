import React from 'react';
import './PagesStyles/Partenaires.css';
import afriknfusion from '../photos/partenaires/afriknfusion.PNG'
import sucresale from '../photos/partenaires/sucre_sale.webp'
import plaquette from '../photos/partenaires/slides-RE_1.pdf'

export default class Partenaires extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    	<div>
    	<h1 className="titre">Nos partenaires</h1>
      <div className="partenaires">
      <div className="card">
  		<img className="card-img-top" src={afriknfusion} alt="Afriknfusion" />
  		<div className="card-body">
    		<h5 className="card-title">Afrik'n'fusion</h5>
    		<p className="card-text">Situé dans la galerie marchande du centre commercial Evry 2, Afrik'n'fusion vous fera découvrir la cuisine africaine et tout sa richesse</p>
  		</div>
		</div>
		<div className="card">
  		<img className="card-img-top" src={sucresale} alt="Sucré Salé" />
  		<div className="card-body">
    		<h5 className="card-title">Sucré salé</h5>
    		<p className="card-text">Sucré Salé est une crêperie située à Evry proposant une multitude de crêpes salées et sucrées pour tous les goûts</p>
  		</div>
		</div>
      </div>
      <p>Intéressés par un partenariat avec nous ? <br />
      <a className="plaquetteRE" href={plaquette}>Visionnez ici nos slides de présentation</a><br />
      Et contactez nous à l'adresse mail suivante : naga-tmsp@gmail.com</p>
      </div>
    );
  }
}
