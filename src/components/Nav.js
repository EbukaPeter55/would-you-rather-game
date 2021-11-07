import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



class Nav extends Component {

    render() {
      // https://www.dimensionscareers.org.uk/referencerequesting/employerreferencerequest/?q=803c7fa5-4b65-4670-a7d0-843d18dbd31e&r=19b92e5e-a823-4cb5-94ce-8dba34c26c44
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
     <li className="nav-item">
     <Link className="nav-link" to='/newQuestions'>New Question</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link " to='/leaderboard'>Leaderboard</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link ">Hello Sarah!</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link">avatar image here</Link>
     </li>
     <li className="nav-item">
     <Link className="nav-link " to='#'>Messages</Link>
     </li>
     <li className="nav-item img-profile">
     </li>
<li className="btn-group nav-item" style={{cursor: "pointer"}}>
{/*eslint-disable-next-line jsx-a11y/role-supports-aria-props*/}
  <ul className="dropdown-menu">   
    <li><Link className="dropdown-item" to="#">Logout</Link></li>
  </ul>
</li>
     </ul>
     </div>
       </div>
      </nav>
            </header>
        )
    }
}


export default Nav