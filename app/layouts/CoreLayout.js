import React, { PropTypes } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { header, rootPath } from '../pages/config'
import { isNumber } from '../utils/tools'
import $storage from '../utils/storage'

class CoreLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {

    var headerEle = <Header></Header>
    var footerEle = <Footer></Footer>

    return (
      <div id="root-wrap">
        {headerEle}
        {this.props.children}
        {footerEle}
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

CoreLayout.contextTypes = {
  router: PropTypes.object.isRequired
}

export default CoreLayout
