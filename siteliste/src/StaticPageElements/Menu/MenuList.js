/*
  It's very important class.
  We create there an adaptive menu, which controls navigation.
  ControlPages component is used there, so all pages are dynamically rendered there.
*/

import React from 'react';
import './MenuList.css';
import ControlPages from './ControlPages';
import snake_scroll from './snake-scroll.png';


export default class MenuList extends React.Component {

  constructor(props) {
    super(props);
    //state.isOpen controls mobile menu and state.pageToShow is the name of the page to be rendered.
    this.state = {isOpen: false, pageToShow: "Naga"};
    this.Open = this.Open.bind(this);
    document.documentElement.style.setProperty("--mobile-height", window.innerHeight + "px");
  }

  //this block is used to control scroll in the document

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  //______________________________________________________

  /*
    We define a standard js function to handleScroll, in order to have a menu pannel in
    static position.
  */

  handleScroll = () => {
    let scrolled = document.documentElement.scrollTop; // returns scrolled distance
    let scrollH = document.documentElement.scrollHeight - window.innerHeight;
    let scrollFixed = window.innerHeight - 60;
    const menuControl = document.querySelector('.menu-scroll-control'); // refers to menu pannel
    const menu = document.querySelector('.menu');
    let w = (scrolled / scrollH) * 100 + "%";
    document.documentElement.style.setProperty("--snake-scroll-width", w);
    /*
    'uncomment to compare scrolled and height of pannel + header'
    let h = menuControl.clientHeight + 120;
    console.log(scrolled + ' ' + h);
    */

    // static position

    if(scrolled > scrollFixed) {
      console.log("here");
      let scroll = (scrolled - scrollFixed) + "px";
      menuControl.style.top = scroll;
      menu.style.position = "absolute";
      menuControl.style.position = "absolute";

    }
    else {
      menuControl.style.top = "120px";
      menuControl.style.position="";
      menu.style.position = "";
    }
 };


// opens a menu

 Open() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

//changes state in order to show selected page

 showPage(pageName) {
    this.setState(state => ({
      pageToShow: pageName
    }));
    this.Open();
  }

  render() {

    // start of a block that dynamically make difference between desktop and mobile styles for menu

    const windowWidth = window.innerWidth;
    let ulStyle = {};
    let burgerStyle = {};
    let open = this.state.isOpen;
    if (windowWidth <= 790 && !open) {
      ulStyle = {
        transform: 'translateY(-100%)'
      };
    } else {
      ulStyle = {
        transform: 'translateY(0)'
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

    // end-of-bloock________________________________________


    return(
      <div className="menu">
      <div className="menu-scroll-control">
        <div className="menu-control">
        <button onClick={this.Open} className="burger" style={burgerStyle}></button>
        <ul className="menu-list" style={ulStyle}>
          <li className="menu-element" onClick={this.showPage.bind(this,"Naga")}>NAGA</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Poles")}>Mots des Pôles</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Pougnes")}>Pougnes</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Programme")}>Programme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Organigramme")}>Organigramme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Partenaires")}>Partenaires</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Ptdj")}>Petit dej</li>
        </ul>
        </div>
        <div className="snake-scroller"></div>
        </div>
        <ControlPages pageToShow={this.state.pageToShow} />
      </div>
    );
    }
  }
