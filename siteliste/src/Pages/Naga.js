import React from 'react';
import './PagesStyles/Naga.css';


export default class Naga extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    let textentree = "Vous entrez en territoire NAGA";
    if (this.props.lang === "english") {
      textentree = "Welcome to NAGA";
    }

    let textwhoami ="Qui sommes nous ?";
    if (this.props.lang === "english") {
      textwhoami = "Who are we ?";
    }

    let textvisit ="Poursuivez votre visite en regardant les autres onglets ;)";
    if (this.props.lang === "english") {
      textvisit = "Continue your visit by looking at the other tabs ;)";
    }

    return (
      <div className="Page">
        <div className="container">
          <h1>{textentree}</h1>
          {/* <p>Bienvenue sur le site de la liste Naga.</p> */}
        </div>
        <div className="container">
          <h2>{textwhoami}</h2>
          <iframe src="https://www.youtube.com/embed/9ySNQa4mwOw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="container">
          <h2>{textvisit}</h2>
          {/* <p>Rien de prévu pour le moment... Mais ça ne saurait tarder...</p> */}
        </div>
      </div>


    );
  }
}
