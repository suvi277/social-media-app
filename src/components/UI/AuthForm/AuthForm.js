import React from 'react';
import './AuthForm.scss';

const AuthForm = ({ title, children }) => {
	return (
		<div className="auth-wrapper">
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export { AuthForm };
