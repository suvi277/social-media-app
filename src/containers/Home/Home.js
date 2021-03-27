import React from 'react';
import { connect } from 'react-redux';
import { UserList } from '@app/containers/UserList';
import { ActiveUserView } from '@app/components/ActiveUserView';

const Home = ({ user }) => {
	return (
		<div className="row">
			<div className="col-12 col-md-4">
				<ActiveUserView user={user} />
			</div>
			<div className="col-12 col-md-8">
				<h2>Friends List</h2>
				<UserList />
			</div>
		</div>
	);
};

const mapStateToProps = ({ userAccount }) => ({
	user: userAccount.activeUser
});

export default connect(mapStateToProps)(Home);
