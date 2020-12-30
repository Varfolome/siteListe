/*
  Header functional class
*/

import './Header.css';
import Button from '../WidgetsAndElements/Button';
import HeaderBloom from '../WidgetsAndElements/HeaderBloom';
import nagaLogo from '../WidgetsAndElements/photos/Logo_Naga.png';

export default function Header() {


  return(
    <div className="header">
        <div className="logo-wrapper">
          <img src={nagaLogo} className="img-fluid naga-logo"/>
        </div>
    </div>
  );
}
