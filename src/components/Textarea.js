import React, { Component } from 'react';
import '../css/textarea.css';

class Textarea extends Component {
	state = {
		value: "C - 3 - 4\nM - 1 - 0\nM - 2 - 1\nT - 0 - 3 - 2\nT - 1 - 3 - 3\nA - Lara - 1 - 1 - S - AADADAGGA\n# Add any row starting with M, T or A"
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
