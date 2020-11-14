import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './StaticPageElements/Header';
import MenuList from './StaticPageElements/Menu/MenuList';

function App() {
  return (
    <div>
      <Header/>
      <MenuList isOpen="false" />
    </div>
  );
}

export default App;
