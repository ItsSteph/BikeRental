import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Heading from './components/Heading';
import NavMenu from './components/NavMenu';
import Bikes from './components/Bikes';
import BookingInformation from './components/BookingInformation';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About'

import './custom.css'

  function App() {
    return (
      <div>
        <Layout>
          <Route exact path='/' component={Heading} />
          <Route path='/About' component={About} />
          <Route path='/BookingInformation' component={BookingInformation} />
          <Route path='/Login' component={Login} />
        </Layout>
      </div>
      );
  }


export default App;
