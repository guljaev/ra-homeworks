'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';

class SubscribeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isValid: true
		};
	}
	changeEmail(event) {
		this.setState({
			isValid: event.currentTarget.validity.valid
		});
	}
	render() {
		return (
			<div className="subscribe__form">
				<form className={`form form--subscribe ${this.state.isValid ? 'is-valid' : 'is-error'}`}>
					<h4 className="form-title">Подписаться:</h4>
					<div className="form-group">
						<label htmlFor="input-email" className="sr-only">Email</label>
						<input 
							type="email" 
							id="input-email" 
							placeholder="Email" 
							className="form-control"
							onChange={this.changeEmail.bind(this)}/>
						<div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
						<button type="submit" className="form-next">
							<i className="material-icons">keyboard_arrow_right</i>
						</button>
					</div>
				</form>
			</div>
    );
	}
}
