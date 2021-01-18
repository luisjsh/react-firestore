import { AuthProvider } from "./context/authContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PrivateRoute from './privateRoute'

import Login from './pages/login/login.jsx'
import SignUp from './pages/signup-page/signup-page.jsx'
import Dashboard from './pages/dashboard/dashboard'
import LandingPage from './pages/landing-page/landing-page'
import AddTransaction from './pages/add/transactions/add-transactions'
import AddBankAccount from './pages/add/bank-account/add-bank-account'
import Navbar from './components/navbar/navbar'
import TransactionPage from "./pages/transaction-page/transactionPage.jsx"
import BankAccountPage from "./pages/bank-account-page/bankAccountPage.jsx"
import TransactionPagination from "./pages/transactions-pagination/transaction-paginations"
import BankAccountsPage from './pages/bankaccounts-page/bankaccounts-page'

function App() {
  return (
    <Router>
          <AuthProvider>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
	              <Route exact path='/signup' component={SignUp}/>
	              <Route exact path='/login' component={Login}/>
                <Route path='/:id'>
                  <Navbar />
                  <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                  <PrivateRoute exact path='/add/transaction' component={AddTransaction}/>
                  <PrivateRoute exact path='/add/bank-account' component={AddBankAccount}/>
                  <PrivateRoute exact path='/transaction/:bankAccount-:id' component={TransactionPage}/>
                  <PrivateRoute exact path='/bank-account/:id' component={BankAccountPage}/>
                  <PrivateRoute exact path='/transactions' component={TransactionPagination}/>
                  <PrivateRoute exact path='/bank-accounts' component={BankAccountsPage}/>
                </Route>
            </Switch>
          </AuthProvider>
    </Router>
  );
}

export default App;