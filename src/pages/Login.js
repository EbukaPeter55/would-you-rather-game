import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
    const [oldUrl, setOldUrl] =  useState("");
    const history = useHistory();


        // console.log(users);
        useEffect(()=> {
            history.location.state && setOldUrl(history.location.state.from.pathname);
        }, []);


        const optionsValue = Object.keys(users).map(id => ({
            value: users[id].id, label:
            <><img className="rounded-circle option-img" src={users[id].avatarURL} alt="avatar"/>
            <span className="option-name">{users[id].name}</span></>
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
            // if old url is set to the pathname, redirect to that
            // path else redirects to the home page
            oldUrl ? history.push(oldUrl) : history.push("/");
            return;
        }
            return alert("Select a login user");
        }
        return (
            <section>            
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
                    <Select className="select-field" name="usersValue"
                    required
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