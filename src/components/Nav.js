import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Nav = ({dispatch}) => {

  // Get the authenticatedUser from localStorage
  const authenticatedUserName = localStorage.getItem('userName');
  const authenticatedUserAvatar = localStorage.getItem('userAvatar');
  // console.log(authenticatedUser);

        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="#navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to='/'>Home</Link>
        </li>
        {
          authenticatedUserName && 
          <>
          <li className="nav-item">
          <Link className="nav-link" to='/newQuestions'>New Question</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/newQuestions'>New Question</Link>
          </li>
          </>
        }     
        <li className="nav-item">
        <Link className="nav-link " to='/leaderboard'>Leaderboard</Link>
        </li>
        {/* Only render the greeting when authenticated */}
        {
          authenticatedUserName &&
          <li className="nav-item">
        <Link className="nav-link " to="#">Hello {authenticatedUserName}!</Link>
        </li>
        }
        
        {
          authenticatedUserAvatar &&
          <>
          <li className="nav-item">        
            <img className="rounded-circle" src={authenticatedUserAvatar} alt="avatarImage"/>
          </li>
          <li className="nav-item">
          <Link className="nav-link " style={{cursor: "pointer"}}
          to='#'>Logout</Link>
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