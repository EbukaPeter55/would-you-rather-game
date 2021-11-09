import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Tab from 'react-bootstrap/Tabs';
import { PropTypes } from "prop-types";





const Home = ({questions}) => {
    // const { questions } = this.props;
    console.log(questions);


        return (
            <section>
            <Nav/>
            {
             Object.keys(questions).map(question => (
                 <li>{question}</li>
             ))
            }
                <div className="card card-wrap">
                <Tab defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 unique-tab">
                <Tab eventKey="home" title="Unanswered questions">
                    <div className="card inner-card">
                    Unanswered questions
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Answered questions">
                <div className="card inner-card">
                    answered questions
                </div>
                </Tab>
                </Tab>
                
                </div>
            </section>
        )
}

const mapStateToProps = ({questions, users}, props) => {
return {
    questions,
    users
}
}

export default connect(mapStateToProps)(Home);