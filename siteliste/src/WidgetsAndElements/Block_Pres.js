import React from 'react';
import './Styles/Block.css';

export default function Block_Pres(props) {
  return (
    <div className="block_pres">
      <div className="title_text_pres">
        <h3 className="title_pres">{props.title} </h3>
        <h5 className="text_pres">{props.text}</h5>
      </div>
      <img src={props.img} className="img_pres"
        alt={props.title} title={props.title} />
    </div>
  )
}
