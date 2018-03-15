import React from 'react';
import classNames from 'classnames';
import '../css/button.css';

const Controller = props => {
	const { label, active, onClick } = props;

	const btnClass = classNames({
		btn: true,
		controller: true,
		active: active,
	});

	return (
		<button className={btnClass} onClick={onClick}>
			{label}
		</button>
	);
};

export default Controller;
