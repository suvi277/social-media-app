import PropTypes from 'prop-types';
import React from 'react';
import { ROUTES_CONFIG } from '@app/routes/routeConfig';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = ({ isAuthenticated, signOutUser }) => {
	const getNavList = (route) => {
		let navItems = '';
		let showNav = isAuthenticated ? route.isAuth : !route.isAuth;

		if (route.label) {
			navItems = showNav && (
				<li
					key={route.key}
					className={`nav-item ${route.key}`}
					onClick={isAuthenticated && route.key === 'sign-out' ? signOutUser : null}
				>
					<NavLink className="nav-link p-3" to={route.path} exact={route.exact}>
						{route.label}
					</NavLink>
				</li>
			);
		}
		return navItems;
	};
	return (
		<ul className="nav justify-content-end">
			{ROUTES_CONFIG.map((route, i) => {
				return getNavList(route, i);
			})}
		</ul>
	);
};

Navigation.propTypes = {
	isAuthenticated: PropTypes.bool,
	signOutUser: PropTypes.func
};

export { Navigation };
