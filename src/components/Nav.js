import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import { connect, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectAuthenticatedUser } from '../selectors';
import { resetAuthUser } from '../actions/authedUser';
import { PropTypes } from "prop-types";



const Nav = ({dispatch}) => {

  // Specify the expected type expected to enable strict typing
  Nav.propTypes = {
    dispatch: PropTypes.func
  }
  const authedUser = useSelector(selectAuthenticatedUser);
  const history = useHistory();

  const triggerLogout = (e) => {
    e.preventDefault();
    dispatch(resetAuthUser());
    history.push("/login");
  };

  // Get the authenticatedUser from localStorage
  const authenticatedUserName = localStorage.getItem('userName');
  const authenticatedUserAvatar = localStorage.getItem('userAvatar');
  // console.log(authenticatedUser);

        return (
            <header>            
            <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="#navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link"  to='/'>Home</Link>
        </li>
        {
          authedUser && 
          <>
          <li className="nav-item">
          <Link className="nav-link" to='/add'>New Question</Link>
          </li>        
          </>
        }     
        {
          authedUser &&
        <li className="nav-item">
        <Link className="nav-link " to='/leaderboard'>Leaderboard</Link>
        </li>
        }
        {/* Only render the greeting when authenticated */}
        {
          authedUser &&
          <li className="nav-item">
        <Link className="nav-link " to="#">Hello {authenticatedUserName}!</Link>
        </li>
        }
        
        {
          authedUser &&
          <>
          <li className="nav-item">        
            <img className="rounded-circle" src={authedUser.avatarURL} alt="avatarImage"/>
          </li>
          <li className="nav-item">
          <Link className="nav-link " style={{cursor: "pointer"}}
          to='#'
          onClick={triggerLogout}
          >Logout</Link>
          </li>
            </>
        }  
     
        </ul>
        </div>
          </div>
          </nav>
                </header>
            )
    }


export default connect()(Nav)