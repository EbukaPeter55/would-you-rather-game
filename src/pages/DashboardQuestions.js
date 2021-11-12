import React, { useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { useHistory } from 'react-router-dom';
import { selectAuthenticatedUser } from '../selectors';
import { handleAddQuestion } from '../actions/shared';



const DashboardQuestion = ({dispatch}) => {
const optionOneRef = useRef("");
const optionTwoRef = useRef(""); 
const history = useHistory();
const authedUser = useSelector(selectAuthenticatedUser)


const handleSubmit = (e) => {
 e.preventDefault();
const optionOneText = optionOneRef.current.value;
const optionTwoText = optionTwoRef.current.value;
const newUserQuestion = { optionOneText, optionTwoText, author: authedUser.id};

// Form validation with vanilla.js
if(optionOneText && optionTwoText) {
    dispatch(handleAddQuestion({question: newUserQuestion, authedUser}));
    optionOneRef.current.value = "";
    optionTwoRef.current.value = "";
    return history.push('/');
}
// todo: Use an error message below the form instead of an alert
alert("Please fill the form!")

};
        return (
            <section>
                <Nav/>
               <div className="card">
               <div className="title">
                   <h2>Create New question</h2>
               </div>
               <hr/>
               <h6>Complete the question</h6>
               <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Would you rather...</label><br/>
                    <input 
                    type="text"
                    ref={ optionOneRef}   
                    name="option1"
                    placeholder="Enter Option one text here"    
                    />
                </div>
                OR
                <div className="form-group">
                    <input 
                    type="text"
                    name="option2"
                    placeholder="Enter Option two text here" 
                    ref={ optionTwoRef}   
                    />
                </div>
                <button type="submit">Create question</button>
               </form>

               </div>
            </section>
        )
}


export default connect()(DashboardQuestion);