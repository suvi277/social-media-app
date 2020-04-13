import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ type = 'button', className = '', buttonClicked, label = '' }) => {
	return (
		<button type={type} className={`btn rounded ${className}`} onClick={buttonClicked}>
			{label}
		</button>
	);
};

Button.propTypes = {
	buttonClicked: PropTypes.func,
	className: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string
};

export { Button };
