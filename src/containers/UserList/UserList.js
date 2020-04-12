import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserView } from '@app/components/UserView';
import { TextField } from '@app/components/UI';

const UserList = ({ users, activeUser }) => {
	const [ searchStr, setSearchStr ] = useState('');

	const onSearch = (e) => {
		setSearchStr(e.target.value);
		console.log('Search goin on');
	};

	return (
		<div>
			<TextField
				label="Search"
				name="email"
				type="email"
				value={searchStr}
				onChange={onSearch}
				placeholder="Search by Name or Email"
				className="input"
			/>
			<div className="user-lists">
				{users.map((user) => user.id !== activeUser.id && <UserView key={user.id} {...user} />)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ userProfiles, userAccount }) => ({
	users: userProfiles.users,
	activeUser: userAccount.activeUser
});

export default connect(mapStateToProps)(UserList);
