import React, { useEffect, Fragment } from 'react';
import './App.css';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
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
import LoadingBar from 'react-redux-loading';



const App = (props) => {

    // Upon creation of the Component, dispatch 
    // the handleGetUsers and handleGetQuestions
    //  to fetch the users and questions
    useEffect(()=> {
        const {dispatch} = props;
        dispatch(handleGetUsers());
        dispatch(handleGetQuestions());
    }, [props]
    );

        return (
            <Router>
            <Fragment>
            <Nav/>
      <LoadingBar/>

        {/*<LoadingBar/>*/}
                <div className="container">
               {/*<Nav/>*/}
              {/* If authedUser is null, display null, else render 
              the dashboard*/}
             
                <Switch>
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
                <Route path='/NotFound' exact component={NotFound}/>
                <Route path='*'
                Redirect exact component={NotFound}/>
                </Switch>
                </div>
               
                </Fragment>          
             </Router>
        )
    
}

function mapStateToProps () {
    return {
    //   loading: authedUser === null
    }
    }

export default connect()(App);