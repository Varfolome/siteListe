/*
  Header functional class
*/

import './Header.css';
import Button from '../WidgetsAndElements/Button';
import HeaderBloom from '../WidgetsAndElements/HeaderBloom';
import AppearText from '../WidgetsAndElements/AppearText';

export default function Header() {

  document.onreadystatechange = () => {
    const header = document.querySelector('.header');
    header.style.height = window.innerHeight - 60 + "px";
  };

  return(
    <div className="header">
        <HeaderBloom text="Naga" />
        <div className="naga-logo"></div>
        <div className="apearing-description">
        <AppearText appearText="Naga est la meilleure liste de TSP. Nous avons notre chambre secret dans le sous sol de TSP ou nous nous cachons du reste du monde. Mais on est partout. On est meme dant ton jardin mdr. On est confine chez toi. Toutes les associations obeissent a nous. Bonne chance..." />
        </div>
    </div>
  );
}
