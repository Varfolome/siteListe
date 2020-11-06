import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const section = document.querySelector('.section');
const card = document.querySelector('.card');
const kraken = document.querySelector('.kraken-wrapper');
const circle = document.querySelector('.circle');

section.addEventListener("mousemove", (event) => {
  //console.log("works");
  let xMove = (window.innerWidth / 2 - event.pageX) / 10;
  let yMove = (window.innerHeight / 2 - event.pageY) / 10;
  //console.log(xMove + ' ' + yMove);
  //card.style.transform = "rotateY({$xMove}deg) rotateX({$yMove}deg)";
  card.style.transform = "rotateY(" + xMove + "deg) rotateX(" + yMove + "deg)";
});

section.addEventListener("mouseenter", (event) => {
  card.style.transition = "all 0.2s ease";
  circle.style.transform = "translateZ(100px)";
  kraken.style.transform = "translateZ(200px)";
});

section.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.7s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
