import Naga from '../../Pages/Naga';
import FAQ from '../../Pages/FAQ';
import Organigramme from '../../Pages/Organigramme';
import Partenaires from '../../Pages/Partenaires';
import Poles from '../../Pages/Poles';
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
