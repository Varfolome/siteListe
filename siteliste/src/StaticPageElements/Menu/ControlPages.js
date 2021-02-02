/*
  We import all pages and switch thim acoording to props.pageToShow passed on
  argument in MenuList.js.
  By default, page to render is the main page Naga
  It is a functional class
*/

import Naga from '../../Pages/Naga'; //Main page
import Organigramme from '../../Pages/Organigramme'; // Organigramme page
import Partenaires from '../../Pages/Partenaires'; // Partenaires page
import Poles from '../../Pages/Poles'; //Mots de poles page
import Pougnes from '../../Pages/Pougnes'; //Pougnes page
import Programme from '../../Pages/Programme'; //Programme page
import Footer from '../Footer';
import './ControlPages.css';

export default function ControlPages(props) {

    let page = <Naga lang={props.lang}/>;
    switch(props.pageToShow) {
      case "Naga":
        page = <Naga lang={props.lang}/>;
        break;
      case "Organigramme":
        page = <Organigramme />;
        break;
      case "Partenaires":
        page = <Partenaires />;
        break;
      case "Poles":
        page = <Poles lang={props.lang} />;
        break;
      case "Pougnes":
        page = <Pougnes />;
        break;
      case "Programme":
        page = <Programme lang={props.lang}/>;
        break;
      default:
        page = <Naga lang={props.lang}/>;



    }

    return(
      <div className="control-page-footer">
          {page}
        <Footer />
      </div>
    );
}
