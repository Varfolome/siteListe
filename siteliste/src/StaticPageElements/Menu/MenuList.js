/*
  It's very important class.
  We create there an adaptive menu, which controls navigation.
  ControlPages component is used there, so all pages are dynamically rendered there.
*/

import React from 'react';
import './MenuList.css';
import ControlPages from './ControlPages';
import snake_scroll from './snake-scroll.png';
import openMenu from '../../WidgetsAndElements/photos/white-menu-icon.png';
import closeMenu from '../../WidgetsAndElements/photos/close-menu-icon.png';


export default class MenuList extends React.Component {

  constructor(props) {
    super(props);
    //state.isOpen controls mobile menu and state.pageToShow is the name of the page to be rendered.
    this.state = {isOpen: false, pageToShow: "Naga", menuControl : openMenu};
    this.Open = this.Open.bind(this);
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
    let scrolled = document.documentElement.scrollTop;
    const menuScrollControl = document.querySelector('.menu-scroll-control');
    let headerHeight = document.querySelector('.header').clientHeight;

    if (this.state.pageToShow !== "Poles" || window.innerWidth > 790) {
      if(scrolled >= headerHeight) {
        menuScrollControl.style.top = 0 + "px";
        menuScrollControl.style.position = "fixed";

      }
      else {
        menuScrollControl.style.top = "";
        menuScrollControl.style.position = "";
      }
  } else {
    menuScrollControl.style.top = "";
    menuScrollControl.style.position = "";
  }
 };


// opens a menu

 Open() {
    this.setState(state => ({
      isOpen: !state.isOpen,
      menuControl: state.menuControl === openMenu ? closeMenu : openMenu
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

    let mdp = this.props.lang === "french" ? "POLES" : "POLES";
    let pougnes = this.props.lang === "french" ? "POUGNES" : "POUGNES";
    let partenaires = this.props.lang === "french" ? "PARTENAIRES" : "PARTNERS";



    return(
      <div className="menu">
      <div className="menu-scroll-control">
        <div className="menu-control">
        <div onClick={this.Open} className="burgerWrapper" style={burgerStyle}><img src={this.state.menuControl} className="burger"/></div>
        <ul className="menu-list" style={ulStyle}>
          <li className="menu-element" onClick={this.showPage.bind(this,"Naga")}>NAGA</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Poles")}>{mdp}</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Pougnes")}>{pougnes}</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Programme")}>PROGRAMME</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Organigramme")}>ORGANIGRAMME</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Partenaires")}>{partenaires}</li>
        </ul>
        </div>
        </div>
        <ControlPages pageToShow={this.state.pageToShow} lang={this.props.lang}/>
      </div>
    );
    }
  }
