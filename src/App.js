import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleGetUsers } from './actions/shared';
import { handleGetQuestions } from './actions/shared';
import Home from './pages/Home';
import Login from './pages/Login';
import Leaderboard from './pages/Leaderboard';
import DashboardQuestion from './pages/DashboardQuestions';
import DashboardPolls from './pages/DashboardPolls';



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
            <Router>
            <Fragment>
        {/*<LoadingBar/>*/}
                <div className="container">
               {/*<Nav/>*/}
              {/* If authedUser is null, display null, else render 
              the dashboard*/}
             
                <div>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/leaderboard' exact component={Leaderboard} /> 
                <Route path='/newQuestions' exact component={DashboardQuestion}/>
                <Router path='/questions/:id'  component={DashboardPolls}/>             
                </div>
              
                </div>
                </Fragment>          
             </Router>
        )
    }
}

function mapStateToProps () {
    return {
    //   loading: authedUser === null
    }
    }

export default connect(mapStateToProps)(App);