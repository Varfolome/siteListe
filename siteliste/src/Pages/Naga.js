import React from 'react';
import './PagesStyles/Naga.css';


export default class Naga extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
      let textentree="vous entrez en territoire naga";
      if (this.props.lang==="english"){
        textentree="you enter chez naga";
      }

    return(
    	<div className="Page">
      <div className="container">
        <h1>{textentree}</h1>
        <p>Bienvenue sur le site de la liste Naga.</p>
      </div>
      <div className="container">
      	<h2>Qui sommes-nous ?</h2>
      	<iframe src="https://www.youtube.com/embed/9ySNQa4mwOw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="container">
      	<h2>Les news des Naga</h2>
      	<p>Rien de prévu pour le moment... Mais ça ne saurait tarder...</p>
      	</div>
      </div>

    
    );
  }
}
