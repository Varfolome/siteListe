import './Footer.css'
import facebook from '../WidgetsAndElements/photos/facebook.png';
import instagram from '../WidgetsAndElements/photos/instagram.png';

export default function Footer(props) {


  return(
    <div className="footer">
      <ul className="logos-list">
        <li className="logos-list-element"><a href=''><img className = "logo" src={facebook} /></a></li>
        <li><a href=''><img className = "logo" src={instagram} /></a></li>
      </ul>
    </div>
  );
}
