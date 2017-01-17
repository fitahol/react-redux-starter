import { injectReducer } from '../../redux/reducers'
import reducer from './module'
import home from './homeContainer'

// Sync route definition
export default (store, cb) => {
	injectReducer(store, { key: 'home', reducer })
	cb(null, home)
}
