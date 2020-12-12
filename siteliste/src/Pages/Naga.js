import React from 'react';
import './PagesStyles/Naga.css';

export default class Naga extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    	<div>
      <div className="Titre">
        <h1>Vous entrez en territoire Naga...</h1>
        <p>(Insérer ici une photo de tous les membres de la liste ensemble ?)</p>
      </div>
      <div className="Reseaux">
      	<h2>Suivre les Nagas sur les réseaux</h2>
      	<p>Pour connaître toutes les actualités des Nagas, n'hésitez pas à nous suivre sur nos réseaux :<br />
      	Facebook : <a href="https://www.facebook.com/Naga.ListeBDE.2021/">Naga - Liste BDE 2021</a><br />
      	Instagram : <a href="https://www.instagram.com/naga.2021/?igshid=qydk0gnm5ao2">@naga.2021</a>
      	</p>
      </div>
      </div>
    );
  }
}
