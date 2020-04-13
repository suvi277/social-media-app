import PropTypes from 'prop-types';
import React from 'react';
import './TextField.scss';

const TextField = ({ name, type, placeholder, onChange, className, value, label }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				className={`form-control ${className}`}
			/>
		</div>
	);
};

TextField.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string
};

export { TextField };
