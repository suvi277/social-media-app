import React from 'react';
import { SignIn } from '@app/containers/SignIn';
import { SignUp } from '@app/containers/SignUp';
import { Home } from '@app/containers/Home';
import { Profile } from '@app/containers/Profile';
import { Redirect } from 'react-router-dom';

export const ROUTES_CONFIG = [
	{
		path: '/',
		key: 'home',
		label: 'Home',
		exact: true,
		isAuth: true,
		component: Home
	},
	{
		path: '/sign-in',
		key: 'sign-in',
		label: 'Sign In',
		component: SignIn
	},
	{
		path: '/sign-up',
		key: 'sign-up',
		component: SignUp
	},
	{
		path: '/sign-out',
		key: 'sign-out',
		label: 'Sign Out',
		isAuth: true,
		component: () => <Redirect to="/" />
	},
	{
		path: '/profile/:id',
		key: 'profile',
		component: Profile
	}
];
