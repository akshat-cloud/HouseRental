import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HouseList from './HouseList';

class App extends Component {
    render() {
        return (
            <Router>
            <Switch>
                <Route path='/' exact={true} component={Login}/>
                <Route path='/houses' exact={true} component={HouseList}/>
                <Route path='/register' exact={true} component={Register}/>
            </Switch>
        </Router>
    )
    }
}

export default App;