import React from 'react';
import img from '../photos/ORGA.png'
import './PagesStyles/Organigramme.css'

export default class Organigramme extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class="imgOrga">
        <img src={img} alt="Organigramme Naga" />
      </div>
    );
  }
}
