import './Footer.css'
import facebook from '../WidgetsAndElements/photos/facebook.png';
import instagram from '../WidgetsAndElements/photos/instagram.png';

export default function Footer(props) {


  return(
    <div className="footer">
      <ul>
        <li><a href=''><img src={facebook} /></a></li>
      </ul>
    </div>
  );
}
