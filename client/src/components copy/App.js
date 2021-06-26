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
        <header className="headeer">
          <div className="content-container">
            <BrowserRouter>
                <div>
                  <Header />
                  <Route exact path="/" component={ Landing } />
                  <Route exact path="/display" component={ Display } />
                  <Route exact path="/add" component={ AddForm }  />
                </div>
              </BrowserRouter>
            </div>
          </header>
      </div>
    );
  }
}

export default connect(null, actions)(App);
