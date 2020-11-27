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
