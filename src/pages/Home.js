import React from 'react';
import { connect, useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tabs';
import { PropTypes } from "prop-types";
import { questionsById, selectAuthenticatedUser, selectUsersWithSomeInfo }
 from '../selectors';
 import { Link } from 'react-router-dom';






const Home = ({dispatch}) => {
  // Specify the expected type expected to enable strict typing
//   Home.propTypes = {
//     dispatch: PropTypes.func
//   }
    const users = useSelector(selectUsersWithSomeInfo);
    console.log(users);
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    // console.log(authenticatedUser);
    // const authId = localStorage.getItem('userId');
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
                {
                    unansweredQuestions.map(unansweredQue => 
                    <div className="card inner-card" key={unansweredQue.id}>
                        <h5>{`${users[unansweredQue.author].name} asks`}</h5>
                        <hr className="horizontal-line"/>
                        <div className="card-body-content d-flex justify-content-evenly">
                            <img className="rounded-circle" src={users[unansweredQue.author].avatarURL} 
                            alt="avatar"/>
                            <div>
                                <h6>Would you rather</h6>
                                <p>{unansweredQue.optionOne.text}</p>
                                <Link to={`/questions/${unansweredQue.id}`}><button type="button">view poll</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
                  
                </Tab>
                <Tab eventKey="profile" title="Answered questions">
                {
                    answeredQuestions.map(unansweredQue => 
                    <div className="card inner-card" key={unansweredQue.id}>
                        <h5>{`${users[unansweredQue.author].name} asks`}</h5>
                        <hr className="horizontal-line"/>
                        <div className="card-body-content d-flex justify-content-evenly">
                            <img className="rounded-circle" src={users[unansweredQue.author].avatarURL} 
                            alt="avatar"/>
                            <div>
                                <h6>Would you rather</h6>
                                <p>{unansweredQue.optionOne.text}</p>
                                <Link to={`/questions/${unansweredQue.id}`}><button type="button">view poll</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }
                </Tab>
                </Tab>
                
                </div>
            </section>
        )
}


export default connect()(Home);