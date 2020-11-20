import React from 'react';
import './MenuList.css';
import ControlPages from './ControlPages';

export default class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.Open = this.Open.bind(this);
  }

  Open() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  render() {
    const windowWidth = window.innerWidth;
    let ulStyle = {};
    let burgerStyle = {};
    let open = this.state.isOpen;
    if (windowWidth <= 790 && !open) {
      ulStyle = {
        transform: 'translateX(100%)'
      };
    } else {
      ulStyle = {
        transform: 'translateX(0)'
      }
    }

    if (windowWidth <= 790) {
      burgerStyle = {
        display: 'flex'
      };
    } else {
      burgerStyle = {
        display: 'none'
      };
    }

    return(
      <div>
        <button onClick={this.Open} className="burger" style={burgerStyle}>click me</button>
        <ul className="menu-list" style={ulStyle}>
          <li className="menu-element">NAGA</li>
          <li className="menu-element">Mots de Poles</li>
          <li className="menu-element">Pougnes</li>
          <li className="menu-element">Programme</li>
          <li className="menu-element">Organigramme</li>
          <li className="menu-element">Partenaires</li>
          <li className="menu-element">FAQ</li>
        </ul>
        <ControlPages pageToShow="FAQ" />
      </div>
    );
    }
  }
