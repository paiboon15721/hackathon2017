import React, { PureComponent } from 'react'
import { ConnectedRouter as Router } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'

import NoMatch from './components/NoMatch'
import Layout from './components/layout'
import SearchRoom from './pages/searchRoom'
import RoomDetail from './pages/roomDetail'
import UploadSlip from './pages/uploadSlip'
import SignIn from './pages/signIn'
import { history } from './store'

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Redirect to="/search-room" />}
            />
            <Route path="/sign-in" component={SignIn} />
            <Route exact path="/search-room" component={SearchRoom} />
            <Route path="/search-room/:id" component={RoomDetail} />
            <Route path="/upload-slip" component={UploadSlip} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

export default App
