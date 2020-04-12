import React from 'react';
import './TextField.scss';

const TextField = ({ name, type, placeholder, onChange, className, value, error, children, label, ...props }) => {
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
				style={error && { border: 'solid 1px red' }}
			/>
			{error && <p>{error}</p>}
		</div>
	);
};

export { TextField };
