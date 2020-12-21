import React from 'react';
import './Styles/Block.css';

export default function Block_VP(props) {
  return(
    <div className="block">
      <h3 className="motdupole">{props.title}</h3>
      <div className="imgtext">
        <img src={props.img} className="img_vp" alt={props.title} title={props.title} />
        <h5 className="text">{props.text}</h5>
      </div>
    </div>
  );
}
