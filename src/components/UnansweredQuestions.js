import React from 'react';
import { Link } from 'react-router-dom';




const UnansweredQuestions = ({unansweredQuestions, users}) => {
// let test = unansweredQuestions.map((unanswer) => {
//     return unanswer;
//     // users[unanswer.author].name
// })

    // console.log(users, unansweredQuestions);
return (

    <div>
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
                                <Link
                                 to={`/questions/${unansweredQue.id}`}><button type="button">view poll</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                }

    </div>
)
}


export default UnansweredQuestions;