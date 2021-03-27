import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { UserView } from '@app/components/UserView';
import { TextField, Pagination, Dropdown } from '@app/components/UI';
import { usersRequested } from '@app/actions/users/users';
import './UserList.scss'

const UserList = ({ users, activeUser }) => {
	const [ searchStr, setSearchStr ] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [ filteredUsers, setFilteredUsers ] = useState([]);
  const sorts = [{
    name: 'Sort by A-Z',
    value: 'name-asc'
  },{
    name: 'Sort by Z-A',
    value: 'name-desc'
  }]

	useEffect(
		() => {
      setFilteredUsers(users)
		},
		[users]
	);

  // Search users
	const onSearch = (e) => {
		setSearchStr(e.target.value.toLowerCase());
		searchUsersByName(users, e.target.value.toLowerCase())
	};

	// get the searched user list by name of the array
  const searchUsersByName = (users, searchStr) => {
    const searchedUsers = users.filter(user => {
      const {first, last} = user.name
      return first.toLowerCase().includes(searchStr) ||
      last.toLowerCase().includes(searchStr)  
    })
    setFilteredUsers(searchedUsers)
  }

  //Paginate
  const paginate = page => setCurrentPage(page)

  const lastIndex = currentPage * itemsPerPage
  const firstindex = lastIndex - itemsPerPage
  const currentUsersList = filteredUsers.slice(firstindex, lastIndex)

  //Filters
  const genderFilters = [...new Set(users.map(user => user.gender))].map(item => {
    return {
      name: `${item.charAt(0).toUpperCase()}${item.slice(1)}`,
      value: item
    }
  })

  const filterUsersByGender = (event) => {
    const value = event.target.value
    if (value === 'all') {
      return setFilteredUsers(users)
    }
    const filteredUsers =  users.filter(user => user.gender === value)
    setFilteredUsers(filteredUsers)
  }

  //Sorts
  const sortNames = (event) => {
    const value = event.target.value
    if (value === 'all') {
      return setFilteredUsers(users)
    }
    const sortedUsers = [...users].sort((prev, next) => {
      if (value === 'name-asc') {
        return next.name.first < prev.name.first ? 1 : -1
      }
      return prev.name.first <= next.name.first ? 1 : -1
    })
    setFilteredUsers(sortedUsers)
  }

	return (
		<div>
      <TextField
        name="search"
        type="text"
        value={searchStr}
        onChange={onSearch}
        placeholder="Search by Name"
        className="input"
      />
      <div className="d-flex justify-content-end">
      {
        genderFilters.length > 0 &&
        <Dropdown fill defaultOption="Filter By Gender" items={genderFilters} change={filterUsersByGender}/>
      }
      <Dropdown defaultOption="Sort by name" items={sorts} change={sortNames}/>
      </div>
			<div className="users-list">
				{currentUsersList.map((user) => user.id !== activeUser.id && <UserView key={user.login.username} user={user} />)}
			</div>
      <Pagination currentPage={currentPage} total={filteredUsers.length} perPage={itemsPerPage} paginate={paginate} />
		</div>
	);
};

const mapStateToProps = ({ userProfiles, userAccount }) => ({
	users: userProfiles.users,
	activeUser: userAccount.activeUser
});

const mapDispatchToProps = (dispatch) => ({ 
  getUsers: (params) => dispatch(usersRequested(params)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
