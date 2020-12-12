import Naga from '../../Pages/Naga';
import FAQ from '../../Pages/FAQ';
import Organigramme from '../../Pages/Organigramme';
import Partenaires from '../../Pages/Partenaires';
import Mots_des_poles from '../../Pages/Mots des pôles';
import Pougnes from '../../Pages/Pougnes';
import Programme from '../../Pages/Programme';

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
      case "Mots_des_poles":
        return (
          <Mots_des_poles />
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
