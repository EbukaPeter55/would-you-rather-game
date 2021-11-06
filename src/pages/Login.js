import React, { Component } from 'react';
import { connect } from 'react-redux';



class Login extends Component {


    render() {
        // Destructure to get users from props
        const {users} = this.props;
        console.log(users);
        return (
            <div>
                Login
            </div>
        )
    }
}

const mapStateToProps = ({users}, props) => {
    return {
        users
    }
    }

export default connect(mapStateToProps)(Login);