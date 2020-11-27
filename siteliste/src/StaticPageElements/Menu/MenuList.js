import React from 'react';
import './MenuList.css';
import ControlPages from './ControlPages';



export default class MenuList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false, pageToShow: "Naga"};
    this.Open = this.Open.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollControl = React.createRef();

  handleScroll = () => {
    let scrolled = document.documentElement.scrollTop;
    let menuControl = document.querySelector('.menu-control');
    let h = menuControl.clientHeight + 120;
    console.log(scrolled + ' ' + h);
    if(scrolled > 120) {
      console.log("here");
      let scroll = (scrolled - 120) + "px";
      menuControl.style.top = scroll;
      menuControl.style.position = "absolute";
    }
    else {
      menuControl.style.top = "120px";
      menuControl.style.position="";
    }
 };

  Open() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  showPage(pageName) {
    this.setState(state => ({
      pageToShow: pageName
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
      <div className="menu" ref={this.nav}>
        <div className="menu-control">
        <button onClick={this.Open} className="burger" style={burgerStyle}>click me</button>
        <ul className="menu-list" style={ulStyle}>
          <li className="menu-element" onClick={this.showPage.bind(this,"Naga")}>NAGA</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Poles")}>Mots de Poles</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Pougnes")}>Pougnes</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Programme")}>Programme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Organigramme")}>Organigramme</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"Partenaires")}>Partenaires</li>
          <li className="menu-element" onClick={this.showPage.bind(this,"FAQ")}>FAQ</li>
        </ul>
        </div>
        <ControlPages pageToShow={this.state.pageToShow} />
      </div>
    );
    }
  }
