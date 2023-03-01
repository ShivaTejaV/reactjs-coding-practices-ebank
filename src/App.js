import {Route, Switch} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
