import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';



class DashboardQuestion extends Component {


    render() {
        return (
            <section>
                <Nav/>
               <h1>New questions</h1>
            </section>
        )
    }
}


export default DashboardQuestion;