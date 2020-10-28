import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import AddPost from '../pages/AddPost';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing';

import '../assets/styles/GlobalStyles.scss';
// import Register from '../containers/Register';
// import Layout from '../components/Layout';
// import Player from '../containers/Player'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/addpost' component={AddPost} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/landing' component={Landing} />
      <Route component={NotFound} />
    </Switch>

  </BrowserRouter>
);

export default App;
