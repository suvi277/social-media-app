import React from 'react';
import { Switch, Route } from 'react-router';
import AuthRoute from './AuthRoute';
import { ROUTES_CONFIG } from './routeConfig';

const Routes = () => {
	return (
		<Switch>
			{ROUTES_CONFIG.map(
				(route) => route.component && (route.isAuth ? <AuthRoute {...route} /> : <Route {...route} />)
			)}
		</Switch>
	);
};

export default Routes;
