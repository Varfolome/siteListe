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
    let scrollH = document.documentElement.scrollHeight - window.innerHeight;
    const menuScrollControl = document.querySelector('.menu-scroll-control');
    let headerHeight = document.querySelector('.header').clientHeight;
    let w = (scrolled / scrollH) * 100 + "%";
    document.documentElement.style.setProperty("--snake-scroll-width", w);

    if (this.state.pageToShow !== "Naga") {
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

    let mdp = this.props.lang === "french" ? "Mots des pôles" : "Word of group";
    let pougnes = this.props.lang === "french" ? "Pougnes" : "I dont know";
    let partenaires = this.props.lang === "french" ? "Partenaires" : "Friends";



    return(
      <div className="menu">
      <div className="menu-scroll-control">
        <div className="menu-control">
        <div onClick={this.Open} className="burgerWrapper" style={burgerStyle}><img src={this.state.menuControl} className="burger"/></div>
        <ul className="menu-list" style={ulStyle}>
          <li className="menu-element" onClick={this.showPage.bind(this,"Naga")}>Naga</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Poles")}>{mdp}</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Pougnes")}>{pougnes}</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Programme")}>Programme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Organigramme")}>Organigramme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Partenaires")}>{partenaires}</li>
        </ul>
        </div>
        </div>
        <ControlPages pageToShow={this.state.pageToShow} />
      </div>
    );
    }
  }
