import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import JobDescription from '../components/JobDescription'
import ApplyForm from '../components/ApplyForm'
import Confirmation from '../components/Confirmation'
import { getDescription } from '../actions/DescriptionActions'

class App extends Component {
  componentDidMount() {
    this.props.getDescriptionAction()
  }

  render() {
    const {
      description,
      isFetching,
      error,
    } = this.props.data
    return (
      <Router>
        <div className='content'>
          <Route exact path="/" render={props =>
            <JobDescription
              {...props}
              description={description}
              isFetching={isFetching}
              error={error} />} />
          <Route path="/form" component={ApplyForm} />
          <Route path="/confirmation" component={Confirmation} />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  data: store.data,
})
const mapDispatchToProps = dispatch => ({
  getDescriptionAction: () => dispatch(getDescription()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
