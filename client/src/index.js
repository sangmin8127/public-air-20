// import 'materialize-css/dist/css/materialize.min.css'
// import "semantic-ui-css/semantic.min.css";
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'
import reducers from './reducers'

// const store = createStore(() => reducers, {}, applyMiddleware(reduxThunk))
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render( <Provider store={ store }><App /></Provider>, document.querySelector( '#root' ) )


