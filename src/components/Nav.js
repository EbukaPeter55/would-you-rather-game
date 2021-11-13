import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
import { connect, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { selectAuthenticatedUser } from '../selectors';
import { resetAuthUser } from '../actions/authedUser';



const Nav = ({dispatch}) => {

  const authUser = useSelector(selectAuthenticatedUser);
  console.log(authUser);
  const history = useHistory();

  const triggerLogout = (e) => {
    e.preventDefault();
    dispatch(resetAuthUser());
    history.push("/login");
  };

  // Get the authenticatedUser from localStorage
  // const authenticatedUserName = localStorage.getItem('userName');
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
          authUser && 
          <>
          <li className="nav-item">
          <Link className="nav-link" to='/add'>New Question</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to='/add'>New Question</Link>
          </li>
          </>
        }     

        { authUser &&
          <li className="nav-item">
          <Link className="nav-link " to='/leaderboard'>Leaderboard</Link>
          </li>
        }
       
        {/* Only render the greeting when authenticated */}
        {
          authUser &&
          <li className="nav-item">
        <Link className="nav-link " to="#">Hello {authUser}!</Link>
        </li>
        }
        
        {
          authUser &&
          <>
          <li className="nav-item">        
            <img className="rounded-circle" src={authUser.avatarURL} alt="avatarImage"/>
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