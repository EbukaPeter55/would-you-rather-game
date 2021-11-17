import React from 'react';
import { Link } from 'react-router-dom';




const NotFound = () => {

    return (
        <div className="text-center">
        <h1>404. Page not found</h1>
        <p>The page you requested for is not available. 
        Kindly click <Link to="/"><span>Home</span></Link> to go back</p>
        </div>
    )
}


export default NotFound;
// export default withRouter(NotFound);
