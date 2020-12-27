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
    return(
      <div className="container">
        <div className="mx-auto your-premix-wrapper">
          <YourPremixCard description="blabba" premixPhoto={test} />
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="existing-premix">
          <ul className="first-class-premix-list">
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
            <li className="first-class-premix"><PremixCard description="blabba" premixPhoto={test}/></li>
          </ul>
          <br/>
          <hr/>
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
