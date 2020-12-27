import React from 'react';
import './PagesStyles/Premix.css';
import PremixCard from '../WidgetsAndElements/PremixCard';
import YourPremixCard from '../WidgetsAndElements/YourPremixCard';
import Choice from '../WidgetsAndElements/Choice';
import test from '../WidgetsAndElements/photos/Logo_Naga.png';

export default class Premix extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let yourPremixCardDescription = "Tu peux creer ton propre Premix. Choisit des ingredients et confirme le. Tu peux aussi faire un premix aleatoire"
    return(
      <div className="container">
        <div className="mx-auto your-premix-wrapper">
          <YourPremixCard description={yourPremixCardDescription} premixPhoto={test} />
        </div>
        <br/>
        <hr className="divisor" />
        <br/>
        <div className="existing-premix">
          <ul className="first-class-premix-list">
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
          </ul>
          <br/>
          <hr className="divisor"/>
          <br/>
          <ul className="second-class-premix-list">
            <li className="second-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="second-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="second-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
          </ul>
        </div>
      </div>
    );
  }
}
