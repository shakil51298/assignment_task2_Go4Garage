import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/Home/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import LoginWithPassWord from './Components/Home/LoginWithPassWord/LoginWithPassWord';
import Products from './Components/Home/Products/Products';
import Navigationbar from './Components/Navbar/Navigationbar';

function App() {
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  useEffect(() => {
    setLoadingSpinner(true);
    setTimeout(() => {
      setLoadingSpinner(false)
    }, 5000)
  }, [])
  return (
    <div>
      {
        loadingSpinner ?
          <div className="centered">
            <HashLoader
              color='#B50DC3'
              loading={loadingSpinner}
              size={60} />
          </div>
          :
          <Router>
            <Navigationbar/>
            <Switch>
              <Route exact path="/user/login">
                <LoginWithPassWord />
              </Route>
              <Route exact path="/user/signup">
              <LoginPage />
              </Route>
              <Route exact path="/">
                <Products/>
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Router>
      }
    </div>
  );
}

export default App;
