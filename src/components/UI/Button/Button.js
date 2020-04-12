import React from 'react';

const Button = ({ type, className, buttonClicked, label }) => {
	return (
		<button type={type} className={`btn rounded ${className}`} onClick={buttonClicked}>
			{label}
		</button>
	);
};

export { Button };
