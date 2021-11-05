import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleGetUsers } from './actions/shared';
import { handleGetQuestions } from './actions/shared';



class App extends Component {

    // Upon creation of the Component, dispatch 
    // the handleGetUsers and handleGetQuestions
    //  to fetch the users and questions
    componentDidMount () {
    this.props.dispatch(handleGetUsers());
    this.props.dispatch(handleGetQuestions());

    }

    render() {
        return (
            <div>
                app
            </div>
        )
    }
}

function mapStateToProps () {
    return {
    //   loading: authedUser === null
    }
    }

export default connect(mapStateToProps)(App);