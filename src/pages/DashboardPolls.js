import React, {useState, useEffect} from 'react';
import { useParams, Redirect } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { chooseQuestionById } from '../selectors';
import Poll from './Poll';


const DashboardPolls = ({ dispatch }) => {

const { id } = useParams();
console.log(id);
const question = useSelector(chooseQuestionById(id));
console.log(question);
if(!question) return <Redirect to="/NotFound"/>;
return (
    <div>
        {/* Polls component */}
        <Poll
            question={question}
        />
    </div>
)

}


export default connect()(DashboardPolls);