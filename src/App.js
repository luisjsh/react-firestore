import { AuthProvider } from "./context/authContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PrivateRoute from './privateRoute'

import Login from './pages/login/login.jsx'
import SignUp from './pages/signup-page/signup-page.jsx'
import Dashboard from './pages/dashboard/dashboard'
import AddTransaction from './pages/add/transactions/add-transactions'
import AddBankAccount from './pages/add/bank-account/add-bank-account'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <Router>
          <AuthProvider>
            <Switch>
	              <Route exact path='/signup' component={SignUp}/>
	              <Route exact path='/login' component={Login}/>
                <Route path='/:id'>
                  <Navbar />
                  <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                  <PrivateRoute exact path='/add/transaction' component={AddTransaction}/>
                  <PrivateRoute exact path='/add/bank-account' component={AddBankAccount}/>
                </Route>
            </Switch>
          </AuthProvider>
    </Router>
  );
}

export default App;