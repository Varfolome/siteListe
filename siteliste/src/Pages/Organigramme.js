import React from 'react';
import img from '../photos/ORGA.jpg'
import './PagesStyles/Organigramme.css'

export default class Organigramme extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="imgOrga">
        <img src={img} className="img-fluid" alt="Organigramme Naga" />
      </div>
    );
  }
}
