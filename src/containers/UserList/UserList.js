import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { UserView } from '@app/components/UserView';
import { TextField } from '@app/components/UI';

const UserList = ({ users, activeUser }) => {
	const [ searchStr, setSearchStr ] = useState('');
	const [ filteredUsers, setFilteredUsers ] = useState([]);

	useEffect(
		() => {
			// reset the search results on load of the component
			setFilteredUsers(users);
			setSearchStr('');
		},
		[ users ]
	);

	const onSearch = (e) => {
		setSearchStr(e.target.value);
		setFilteredUsers(getFilteredUsers(users, e.target.value.toLowerCase()));
	};

	// get the filtered list by name of the array
	const getFilteredUsers = (users, searchStr) =>
		[ ...users ].filter(function(user) {
			const { firstName, email, lastName } = user;
			return (
				firstName.toLowerCase().includes(searchStr) ||
				lastName.toLowerCase().includes(searchStr) ||
				email.toLowerCase().includes(searchStr)
			);
		});

	return (
		<div>
			<TextField
				label="Search"
				name="search"
				type="text"
				value={searchStr}
				onChange={onSearch}
				placeholder="Search by Name or Email"
				className="input"
			/>
			<div className="user-lists">
				{filteredUsers.map((user) => user.id !== activeUser.id && <UserView key={user.id} user={user} />)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ userProfiles, userAccount }) => ({
	users: userProfiles.users,
	activeUser: userAccount.activeUser
});

export default connect(mapStateToProps)(UserList);
