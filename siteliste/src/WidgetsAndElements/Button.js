import React from 'react';
import './Styles/Button.css';

export default class Button extends React.Component {

  render() {
    return(
      <button class="naga-button"><span class="button-text">{this.props.text}</span></button>
    );
  }
}
