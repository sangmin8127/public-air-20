import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Display from './Display';
import Landing from './Landing';
import AddForm from './AddForm';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchData();
    this.props.addData()
  }

  render() {
    return (
      <div>
          <div style={{margin:"0 auto", padding: "0 1.6rem", maxWidth: "60rem"}}>
            <BrowserRouter>
                <div>
                  <Header />
                  <Route exact path="/" component={ Landing } />
                  <Route exact path="/display" component={ Display } />
                  <Route exact path="/add" component={ AddForm }  />
                </div>
              </BrowserRouter>
            </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
