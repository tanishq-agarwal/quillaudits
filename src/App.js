import React from 'react';
import Home from './Home';
import { Route, Switch, Redirect } from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import Pricing from './Pages/Pricing';

const App = () => {
  return (
    <>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={AboutUs}></Route>
            <Route exact path='/pricing' component={Pricing}></Route>
            <Redirect to="/" />
          </Switch>
    </>
  )
}

export default App;
