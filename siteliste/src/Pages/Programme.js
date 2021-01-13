import React from 'react';
import Purpose from '../WidgetsAndElements/Purpose';
import test from '../WidgetsAndElements/photos/instagram.png';
import './PagesStyles/Programme.css';

export default class Programme extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let generalPurposes = [[test, "testafsgergergererh", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."], [test, "lol", "sdgsdgsgshshsfh"]];
  //  let specificPurposes = [];
    let generalPurposesJSX = generalPurposes.map((generalPurposeProps) => <li className="general-purposes-list-element" key={generalPurposeProps[1]}><Purpose purposeImg={generalPurposeProps[0]} purposeName={generalPurposeProps[1]} purposeDescription={generalPurposeProps[2]}/><br/><hr/><br/></li>);
  //  let specificPurposesJSX = specificPurposes.map((specificPurposeProps) => <li className="general-purposes-list-element" key={specificPurposeProps[1]}><Purpose purposeImg={specificPurposeProps[0]} purposeName={specificPurposeProps[1]} purposeDescription={generalPurposeProps[2]}/><br/><hr/><br/></li>);

    return(
      <div className="programme">
        <h1>Les objectifs generales</h1>
        <div className="general-purposes">
          <ul className="general-purposes-list">
            {generalPurposesJSX}
          </ul>
        </div>
        <div className="specific-purposes">
        </div>
      </div>
    );
  }
}
