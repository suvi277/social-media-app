import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// - Import reducers
import { userAccount } from './userAccount';
import { userProfiles } from './users';

const createRootReducer = (history) =>
	combineReducers({
		userAccount,
		userProfiles,
		router: connectRouter(history)
	});

export default createRootReducer;
