import React, { Component } from 'react';
import Mail from './Mail.js';
import imgmail from '../WidgetsAndElements/photos/mail.png';
import './MailButton.css';

export default class MailButton extends Component {

	state = {
		visible: false
	}

	show = () => {
		this.setState({
			visible: true
		})
	}

	hide = () => {
		this.setState({
			visible: false
		})
	}

	render() {
		return(
			<div>
				<Mail 
				visible={this.state.visible}
				hide={this.hide}
				/>
				<button onClick ={this.show} className='Bouton'>CLIQUE MOI</button>
			</div>
		)
	}
}