import React, { useState } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Logo from '../assets/images/reactjs.jpeg';
import { selectUsersWithSomeInfo } from '../selectors';
import Select from 'react-select';


const Login = ({users}) => {

        console.log(users);
        const optionsValue = Object.keys(users).map(id => ({
            value: users[id].id, label:
            <><img src={users[id].avatarURL} alt="avatar"/>
            <span>{users[id].name}</span></>
        }));

        // handleChange(){
            
        // }
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
                <form>
                    <div className="form-group">
                    <Select name="usersValue"
                    //  onChange={handleChange}
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