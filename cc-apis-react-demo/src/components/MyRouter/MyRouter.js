import React from 'react';
//import PropTypes from 'prop-types';
import styles from './MyRouter.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  //useLocation
} from "react-router-dom";
import MbApi from '../MbApi/MbApi';
import Home from '../Home/Home';
import OtonomoApi from '../OtonomoApi/OtonomoApi'

/* function isActive( pathname){
  return (useLocation().pathname === pathname);
} */

const MyRouter = () => (
  <Router>
  <div className={styles.nav}>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/otonomo-api">Otonomo</Link>
        <Link to="/mb-api">Mercedes-Benz API</Link>
    </nav>

    <hr />

    {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/mb-api">
        <MbApi />
      </Route>
      <Route exact path="/otonomo-api">
        <OtonomoApi />
      </Route>
    </Switch>
  </div>
</Router>
);

MyRouter.propTypes = {};

MyRouter.defaultProps = {};

export default MyRouter;