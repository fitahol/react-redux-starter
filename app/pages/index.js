import $storage from '../utils/storage'
import { rootPath } from './config'
import coreLayout from '../layouts'

function loadRoute(cb, store) {
	return (module) => module.default(cb, store)
}


function errorLoading( err ) {
	console.log('Dynamic page loading failed', err)
}

const createRoutes = (store) => ({
	path: `${rootPath}/`,
	indexRoute: {
		getComponent(nextState, cb) {
			System.import('./home').then(loadRoute(store, cb)).catch(errorLoading)
		}
	},
	component: coreLayout,
	childRoutes: [
		{
			path: `${rootPath}/counter`,
			getComponent(nextState, cb) {
				System.import('./counter').then(loadRoute(store, cb)).catch(errorLoading)
			}
		}
	]
})

export default createRoutes
