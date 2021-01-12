import React from 'react';
import './PagesStyles/Naga.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/Carousel';
import teamPhoto1 from '../WidgetsAndElements/photos/teamPhoto1.png';
import teamPhoto2 from '../WidgetsAndElements/photos/teamPhoto2.png';


export default class Naga extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return(
    	<div className="Page">
      <div className="carousel">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={teamPhoto1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teamPhoto2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
      <div className="container">
        <h1>Vous entrez en territoire Naga...</h1>
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
