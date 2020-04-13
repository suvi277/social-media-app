import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/" className="navbar-brand">
			<img src="https://www.kalido.me/wp-content/themes/kalido-theme/img/logo.svg" alt="Kalido" width="150" />
		</Link>
	);
};
export { Logo };
