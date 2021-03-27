import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import * as History from 'history';
import createRootReducer from '@app/reducers';
import { rootSaga } from '@app/sagas';

export const history = History.createBrowserHistory({
	basename: process.env.PUBLIC_URL
});


const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [ routerMiddleware(history), sagaMiddleware ];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export const store = createStore(createRootReducer(history), initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);