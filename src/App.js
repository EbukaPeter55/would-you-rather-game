import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from './actions/shared';



class App extends Component {

    // Upon creation of the Component, dispatch 
    // the handleInitialData to fetch the users and questions
    componentDidMount () {
    // this.props.dispatch(handleInitialData())
    console.log('yes');
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}



export default App;