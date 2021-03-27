import React from 'react';
import './Header.scss';
import { Logo } from '@app/components/Logo';
import { Navigation } from '@app/components/Navigation';

const Header = (props) => {
	return (
		<header className="sticky-top navbar p-0">
			<div className="container">
				<Logo />
				<Navigation {...props} />
			</div>
		</header>
	);
};

export { Header };
