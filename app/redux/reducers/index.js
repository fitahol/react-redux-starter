import { combineReducers } from 'redux';
import fetchState from './fetch';
import { routerReducer as router } from 'react-router-redux';

const reducers = (asyncReducers) => combineReducers({
	router,
	...asyncReducers
})

export const injectReducer = (store, {
	key,
	reducer
}) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
