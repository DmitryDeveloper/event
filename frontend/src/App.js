import { Provider } from 'react-redux';
import store from './redux/store';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Auth from './components/Auth';
import Registration from './components/Registration';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <div className="App">
                        <Sidebar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Auth} />
                        <Route exact path="/registr" component={Registration} />
                    </div>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
