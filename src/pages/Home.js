import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import Tab from 'react-bootstrap/Tabs'



class Home extends Component {

    render() {
const { questions } = this.props;
console.log(questions);
        return (
            <section>
            <Nav/>
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
}

const mapStateToProps = ({questions}, props) => {
return {
    questions : questions
}
}

export default connect(mapStateToProps)(Home);