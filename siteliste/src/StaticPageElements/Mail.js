import React from 'react';
import './Mail.css';
export default function Mail(props) {
	return(
		<div className='Mail'
		style={{
			transform: props.visible ? 'translateY(-100vh)' : 'translateY(0vh)',
			opacity: props.visible ? '1' : '0'
		}}
		>
			<button onClick={props.hide}>X</button>
			<p>
			Lorem ipsum
			</p>
		</div>
	)
}