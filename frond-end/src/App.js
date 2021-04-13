import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import InterfaceVendor from "./components/Vendor/InterfaceVendor";
import Homepage from "./Homepage";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Nhahang from "./components/User/Nhahang";
import NhahangDetail from "./components/User/NhahangDetail";
import ProductDetail from "./components/User/ProductDetail";
import Checkout from "./components/User/Checkout";
import Payment from "./components/User/Payment";
import UpdateVendor from "./components/Vendor/UpdateMenu";
import AddProVendor from "./components/Vendor/AddProVendor";
import Login from './components/Authen/Login';
import Register from './components/Authen/Register';
import Home from './components/Authen/Home';
import Dashboard from './components/Authen/Dashboard';
import PrivateRoute from './components/Authen/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          
          <Route path='/vendor'>
            <InterfaceVendor />
          </Route>
        </Switch>
         */}
        {/* <div>
          <Header />
        </div> */}
        <Switch>
          <Route path="/" exact>
            <Service />
          </Route>
          <Route path="/nhahang">
            <Nhahang />
          </Route>
          <Route path={"/vendordetail/:id"} exact>
            <NhahangDetail />
          </Route>
          <Route path={"/productdetail/:id"} exact>
            <ProductDetail />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/lienhe">
            <Contact />
          </Route>
          <Route path="/vendor">
            <InterfaceVendor />
          </Route>
          <Route path="/showVendor">
            <UpdateVendor />
          </Route>
          <Route path="/addProVendor">
            <AddProVendor />
          </Route>
          {/*User might LogIn*/}
          <Route path="/home">
            <Home />
          </Route>
          {/*User will LogIn*/}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* User is LoggedIn*/}
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        {/* <div>
          <Footer />
        </div> */}
      </Router>
    );
  }
}

export default App;
