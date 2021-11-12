import React, { useState } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Logo from '../assets/images/reactjs.jpeg';
import { selectUsersWithSomeInfo } from '../selectors';
import Select from 'react-select';
import { setAuthedUser } from '../actions/authedUser';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';





const Login = ({dispatch, users}) => {
    
    //Set the expected proptypes we want to receive to enable strict typing
    Login.propTypes = {
    users : PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired, 
    }

    const [userId, setUserId] = useState("");
    const history = useHistory();

        console.log(users);
        const optionsValue = Object.keys(users).map(id => ({
            value: users[id].id, label:
            <><img src={users[id].avatarURL} alt="avatar"/>
            <span>{users[id].name}</span></>
        }));

        // Our handleChange function sets the userId to the 
        // new Id selected from the form user field
      const handleChange = (id) => {
            return setUserId(id.value);
        }

      const handleSubmit = (e) => {
        e.preventDefault();
        if(userId){
            dispatch(setAuthedUser(users[userId]));
            localStorage.setItem('userName', users[userId].name);
            localStorage.setItem('userAvatar', users[userId].avatarURL);
            localStorage.setItem('userId', users[userId].id);
            console.log(users[userId].id);
            // todo: Redirect the user to the homepage
            history.push('')
            return;
        }
            return "An error occured"
        }
        return (
            <section>
            <Nav/>
                <div className="card card-main">
                <div className="top-heading">
                    <h5>Welcome to the Would you rather app</h5>
                    <p>Please sign in to continue</p>
                </div>
                <hr/>
                <img className="img-fluid" src={Logo} alt="ReactLogo"/>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <Select name="usersValue"
                     onChange={handleChange}
                     options={optionsValue}   
                    />
                    </div>
                    <button className="text-center" type="submit">
                        Login
                    </button>
                </form>
                </div>
            </section>
        )
}

const mapStateToProps = (state) => {
    return {
        users: selectUsersWithSomeInfo(state)
    };
    }

export default connect(mapStateToProps)(Login);