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
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
import Nav from './components/Nav';
// import LoadingBar from 'react-redux-loading';



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
      {/* <LoadingBar/> */}
            <Nav/>
        {/*<LoadingBar/>*/}
                <div className="container">
               {/*<Nav/>*/}
              {/* If authedUser is null, display null, else render 
              the dashboard*/}
             
                <div>
                {/* Wrap component that can only be accessed 
                by authenticated users with PrivateRoute */}
                <PrivateRoute exact  path='/'>
                <Home/>
                </PrivateRoute>
                <PrivateRoute exact  path='/leaderboard'>
                <Leaderboard/>
                </PrivateRoute>
                <PrivateRoute exact  path='/add'>
                <DashboardQuestion/>
                </PrivateRoute>
                <PrivateRoute exact  path='/questions/:id'>
                <DashboardPolls/>
                </PrivateRoute>
                <Route path='/login' exact component={Login} />
                <Route path='/NotFound' component={NotFound}/>
                </div>
                <Route path='*'
                Redirect={Login}/>
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