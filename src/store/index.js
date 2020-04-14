import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import * as History from 'history';
import createRootReducer from '@app/reducers';

export const history = History.createBrowserHistory({
	basename: process.env.PUBLIC_URL
});

const initialState = {};
const enhancers = [];
const middleware = [ routerMiddleware(history) ];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(createRootReducer(history), initialState, composedEnhancers);