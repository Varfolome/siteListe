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

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="main">
        <Header />
        <MenuList isOpen="false" />
      </div>
  );
}
}
