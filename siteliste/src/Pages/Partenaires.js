import React from 'react';
import './PagesStyles/Partenaires.css';
import afriknfusion from '../photos/partenaires/afriknfusion.PNG';
import sucresale from '../photos/partenaires/sucre_sale.webp';
import plaquette from '../photos/partenaires/slides-RE_1.pdf';
import barbershop from '../photos/partenaires/barbershop.png';
import rankconsulting from '../photos/partenaires/rankconsulting.jpeg';
import jiminis from '../photos/partenaires/jiminis.jpeg';
import dinap from '../photos/partenaires/dinap.png'

export default class Partenaires extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    	<div className="partenaires-wrapper">
    	<h1 className="titre">Nos partenaires</h1>
      <div className="partenaires">
      <div className="card">
  		<a href="https://www.afriknfusion.fr/"><img className="card-img-top" src={afriknfusion} alt="Afriknfusion" /></a>
  		<div className="card-body">
    		<h5 className="card-title">Afrik'n'fusion</h5>
    		<p className="card-text">Situé dans la galerie marchande du centre commercial Evry 2, Afrik'n'fusion vous fera découvrir la cuisine africaine et tout sa richesse. <br />
    		<a href="https://www.afriknfusion.fr/">Leur site internet</a></p>
  		</div>
		</div>
		<div className="card">
  		<a href="https://www.facebook.com/sucresaleevry/"><img className="card-img-top" src={sucresale} alt="Sucré Salé" /></a>
  		<div className="card-body">
    		<h5 className="card-title">Sucré salé</h5>
    		<p className="card-text">Sucré Salé est une crêperie située à Evry proposant une multitude de crêpes salées et sucrées pour tous les goûts.<br />
    		<a href="https://www.facebook.com/sucresaleevry/">Leur page facebook</a></p>
  		</div>
		</div>
      <div className="card">
      <a href="https://pizza-dinapoli-evry.fr"><img className="card-img-top" src={dinap} alt="Dinap" /></a>
      <div className="card-body">
        <h5 className="card-title">Pizza Di Napoli</h5>
        <p className="card-text">La Pizza Di Napoli est une pizzeria située dans le quartier des Epinettes.
        Elle propose une grande variété de pizzas, mais également des sandwichs, des burgers ou des tacos. <br />
        <a href="https://pizza-dinapoli-evry.fr/">Leur site internet</a></p>
      </div>
      </div>
      <div className="card">
      <a href="https://fr-fr.facebook.com/BarbershopLecorner/"><img className="card-img-top" src={barbershop} alt="Corner Barber Shop" /></a>
      <div className="card-body">
        <h5 className="card-title">Corner Barber Shop</h5>
        <p className="card-text">Le Corner Barber Shop est un barbier et coiffeur situé dans le quartier des Epinettes à Evry.<br />
        <a href="https://fr-fr.facebook.com/BarbershopLecorner/">Leur page facebook</a></p>
      </div>
    </div>
    <div className="card">
      <a href="http://www.rank-consulting.fr/"><img className="card-img-top" src={rankconsulting} alt="Rank Consulting" /></a>
      <div className="card-body">
        <h5 className="card-title">Rank Consulting</h5>
        <p className="card-text">Rank Consulting est un cabinet de conseil qui apporte son soutien en gestion de projets dans le cadre des investissements d'infrastructures de réseau télécom.<br />
        <a href="http://www.rank-consulting.fr/">Leur site internet</a></p>
      </div>
    </div>
    <div className="card">
      <a href="https://www.jiminis.com/"><img className="card-img-top" src={jiminis} alt="Jiminis" /></a>
      <div className="card-body">
        <h5 className="card-title">Jimini's</h5>
        <p className="card-text">Jimini's est un vendeur d'insectes comestibles cuisinés et assaisonnés. Parfaits pour l'apéro !<br />
        <a href="https://www.jiminis.com/">Leur site internet</a></p>
      </div>
    </div>
    </div>
      <div className="part-desc-foot">
      <br/>
      <p className="desc-foot">Intéressés par un partenariat avec nous ? </p>
      <a className="plaquetteRE" href={plaquette} target="blank">Visionnez ici nos slides de présentation</a><br />
      <p className="desc-foot">Et contactez nous à l'adresse mail suivante : naga-tmsp@gmail.com</p>
      </div>
      </div>
    );
  }
}
