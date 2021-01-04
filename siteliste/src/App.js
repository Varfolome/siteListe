/*
  The heart of application. There is 3 components Header, MenuList and Footer
  The Header and the Footer are always on the page and MenuList contain menu and pages
  controlled by this menu.
*/

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './StaticPageElements/Header';
import MenuList from './StaticPageElements/Menu/MenuList';
import french from './WidgetsAndElements/photos/french.jpg';
import english from './WidgetsAndElements/photos/english.jpg';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {lang: "french"};
  }

  controlVersion(lang) {
    this.setState(state => ({
      lang: lang
    }));
  }

  render() {
    return (
      <div className="app">
      <div className="main">
        <div className="lang-menu-wrapper">
          <ul className="lang-menu">
            <li className="lang-menu-element lang-french"><img src={french} className="lang-logo" onClick={this.controlVersion.bind(this,"french")}/></li>
            <li className="lang-menu-element lang-english"><img src={english} className="lang-logo" onClick={this.controlVersion.bind(this,"english")} /></li>
          </ul>
        </div>
        <Header />
        <MenuList isOpen="false" lang={this.state.lang}/>
      </div>
      </div>
  );
}
}
