import './Footer.css'
import facebook from '../WidgetsAndElements/photos/facebook.png';
import instagram from '../WidgetsAndElements/photos/instagram.png';

export default function Footer(props) {


  return(
    <div className="naga-footer">
      <ul className="logos-list">
        <li className="logos-list-element"><a href='https://www.facebook.com/Naga.ListeBDE.2021' target="blank"><img className = "rs-logo" src={facebook} /></a></li>
        <li className="logos-list-element"><a href='https://www.instagram.com/naga.2021/' target="blank"><img className = "rs-logo" src={instagram} /></a></li>
      </ul>
    </div>
  );
}
