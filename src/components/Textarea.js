import React, { Component } from 'react';
import '../css/textarea.css';

import { INIT_MAP } from '../_config';

class Textarea extends Component {
	state = {
		value: INIT_MAP
	};

	handleChange = e => {
		const { value } = e.target;
		this.setState({ value });
		this.props.onChange(value);
	};

	render = () => {
		const { placeholder, type } = this.props;
		const { value } = this.state;

		return (
			<div className="field-line">
				<textarea
					className="field-input"
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={this.handleChange}
				/>
			</div>
		);
	};
}

export default Textarea;
