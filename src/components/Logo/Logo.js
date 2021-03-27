import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Logo = () => {
	return (
		<Link to="/" className="navbar-brand p-0">
			<img src={logo} alt="demo code" width="100" />
		</Link>
	);
};
export { Logo };
