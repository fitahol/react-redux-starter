import { connect } from 'react-redux'
import { fetchRequest, fetchFailed } from '../../redux/actions'
import homeView from './homeComponent'

const mapActionCreators = {
  fetchRequest: (url, options, key, filter) => fetchRequest(url, options, key, filter),
  fetchFailed: (message) => fetchFailed(message)
}

const mapStateToProps = (state) => ({
  homeInfo: state.home.homeInfo
})

export default connect(mapStateToProps, mapActionCreators)(homeView)
