import './Footer.css'
import facebook from '../WidgetsAndElements/photos/facebook.png';
import instagram from '../WidgetsAndElements/photos/instagram.png';
import mail from '../WidgetsAndElements/photos/mail.png';
import MailButton from "./MailButton.js"

export default function Footer(props) {


  return(
    <div className="naga-footer">
      <h4 className="footer-description">Contact :</h4>
      <ul className="logos-list">
        <li className="logos-list-element"><a href='https://www.facebook.com/Naga.ListeBDE.2021' target="blank"><img className = "rs-logo" src={facebook} /></a></li>
        <li className="logos-list-element"><a href='https://www.instagram.com/naga.2021/' target="blank"><img className = "rs-logo" src={instagram} /></a></li>
        <li className="logos-list-element"><a href='mailto:naga-tmsp@gmail.com' target="blank"><img className = "rs-logo" src={mail} /></a></li>
      </ul>
    </div>
  );
}
