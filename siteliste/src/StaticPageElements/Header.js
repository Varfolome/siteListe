/*
  Header functional class
*/

import './Header.css';
import Button from '../WidgetsAndElements/Button';
import HeaderBloom from '../WidgetsAndElements/HeaderBloom';

export default function Header() {
  return(
    <div className="header">
      <HeaderBloom text="Naga" />
    </div>
  );
}
