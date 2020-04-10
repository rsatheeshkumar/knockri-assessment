import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CandidateContainer from './container/CandidateContainer'
import ApplicationContainer from './container/ApplicationContainer'
import Loader from './components/Loader'
import Alert from './components/Alert'
import { selectError, selectLoading } from './redux/global/selector'

const App = ({ error, loading }) => {
  return (
    <div className="app">
      <nav className="navbar navbar-light bg-warning">
        <Link className="navbar-brand" to="/">
          Candidate
        </Link>
      </nav>
      <Loader loading={loading} />
      <Alert message={error} />

      <Switch>
        <Route exact path="/" component={CandidateContainer} />
        <Route path="/user/:id" component={ApplicationContainer} />
      </Switch>
    </div>
  )
}

const mapState = createStructuredSelector({
  error: selectError,
  loading: selectLoading,
})

export default connect(mapState)(App)
