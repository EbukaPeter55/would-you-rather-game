import React from 'react';
import { connect, useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tabs';
import { PropTypes } from "prop-types";
import { questionsById, selectAuthenticatedUser, selectUsersWithSomeInfo }
 from '../selectors';
 import { Link } from 'react-router-dom';
import UnansweredQuestions from '../components/UnansweredQuestions';
import AnsweredQuestions from '../components/AnsweredQuestions';





const Home = ({dispatch}) => {
  // Specify the expected type expected to enable strict typing
  Home.propTypes = {
    dispatch: PropTypes.func
  }
    const users = useSelector(selectUsersWithSomeInfo);
    console.log(users);
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    // console.log(authenticatedUser);
    // Destructure to get unanswered and answered questions as
    // standalone variable
    const {unansweredQuestions, answeredQuestions} = 
    useSelector(questionsById(authenticatedUser.id));
    console.log(answeredQuestions);
    console.log(unansweredQuestions);


        return (
            <section>
          
                <div className="card card-wrap">
                <Tab defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 unique-tab">
                <Tab eventKey="home" title="Unanswered questions">
               
                {/* Unanswered questions */}
                <UnansweredQuestions
                    unansweredQuestions={unansweredQuestions}
                    users={users}
                />                     
                </Tab>
                <Tab eventKey="profile" title="Answered questions">
                {/* Answered questions */}
                <AnsweredQuestions
                    answeredQuestions={answeredQuestions}
                    users={users}
                />
                
                </Tab>
                </Tab>
                
                </div>
            </section>
        )
}


export default connect()(Home);