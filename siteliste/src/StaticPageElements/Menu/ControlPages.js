/*
  We import all pages and switch thim acoording to props.pageToShow passed on
  argument in MenuList.js.
  By default, page to render is the main page Naga
  It is a functional class
*/

import Naga from '../../Pages/Naga'; //Main page
import FAQ from '../../Pages/FAQ'; //FAQ page
import Organigramme from '../../Pages/Organigramme'; // Organigramme page
import Partenaires from '../../Pages/Partenaires'; // Partenaires page
import Poles from '../../Pages/Poles'; //Mots de poles page
import Pougnes from '../../Pages/Pougnes'; //Pougnes page
import Programme from '../../Pages/Programme'; //Programme page

export default function ControlPages(props) {

    switch(props.pageToShow) {
      case "Naga":
        return (
          <Naga />
        );
        break;
      case "FAQ":
        return (
          <FAQ />
        );
        break;
      case "Organigramme":
        return (
          <Organigramme />
        );
        break;
      case "Partenaires":
        return (
          <Partenaires />
        );
        break;
      case "Poles":
        return (
          <Poles />
        );
        break;
      case "Pougnes":
        return (
          <Pougnes />
        );
        break;
      case "Programme":
        return (
          <Programme />
        );
        break;
      default:
        return (
          <Naga />
        );



    }
}
