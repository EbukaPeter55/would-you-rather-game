import React, {useState, useEffect} from 'react';
import Nav from '../components/Nav';
import { useParams, Redirect } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { handleSaveAnswers } from '../actions/shared';
import { voteForQuestion } from '../actions/questions';
import { chooseQuestionById, chooseUserById, selectAuthenticatedUser, chooseOptionsForQuestions } from '../selectors';



const DashboardPolls = ({ dispatch }) => {

const { id } = useParams();
console.log(id);
const question = useSelector(chooseQuestionById(id));
console.log(question);
const asked = useSelector(chooseUserById(question.author)); 
const {options,  allVoteCount} = useSelector(chooseOptionsForQuestions(id));
const author = useSelector(selectAuthenticatedUser);
const [currentRadioButtonval, setCurrentValue] = useState(null);
const [isAnswered, setIsAnswered] = useState(false);
const allVotes = options.reduce((acc, cur) => {
    return acc.concat(cur.votes)
}, []);

useEffect(() => {
 if(allVotes.includes(author.id)){
     setIsAnswered(true);
 }
});

useEffect(() => {
    // console.log(question);
    if(!question) return <Redirect to="/NotFound"/>;
   
});
const [disable, setDisable] = React.useState(true);


const handleSubmit = (e) => {
 e.preventDefault();

 dispatch(handleSaveAnswers({authedUser: author.id, qid: question.id, 
    answer: currentRadioButtonval}));
 dispatch(voteForQuestion({authedUser: author.id, qid: id,
     answer: currentRadioButtonval}));
};


    return (
        <>
        <section>
        <h1>Poll</h1>
        <div className="card-wrap">            
                    <div className=" card inner-card poll-card">
                    <h5 className="poll-ask-by">{!isAnswered ? `${asked.name} asks:` : `Asked by ${asked.name}`}</h5>
                    <hr className="horizontal-line"/>
                        <div className="card-body-content d-flex justify-content-evenly">
                            <img className="rounded-circle" src={author.avatarURL} 
                            alt="avatar"/>
                        <div className="card-content-right">
                            {
                                !isAnswered ?
                                <>
                                <h6>Would you rather</h6>
                                <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                <label>                                
                                <input 
                                    type="radio"
                                    name="option"
                                    value="optionOne"
                                    onChange={e => setCurrentValue(
                                        e.target.value,
                                        setDisable(false)
                                        )}
                                    defaultChecked={currentRadioButtonval === question.optionOne.text}
                                />
                                &nbsp;
                                {question.optionOne.text}
                                </label>
                                </div>
                                <div className="form-group">
                                <label>                                
                                <input 
                                    type="radio"
                                    name="option"
                                    value="optionTwo"
                                    onChange={e => setCurrentValue(e.target.value,
                                        setDisable(false))}
                                    defaultChecked={currentRadioButtonval === question.optionOne.text}
                                />
                                &nbsp;
                                {question.optionTwo.text}
                                </label>
                                </div>
                                <button disabled={disable} type="submit">Vote</button>
                                </form>
                                </>
                                
                                 : 

                                 <div className="card-result">
                                 <h3>Results:</h3>
                                 {
                                     options.map((option, id) => {
                                        const percentage = (option.votes.length/allVoteCount * 100).toFixed(2);
                                        {/* console.log(id); */}
                                        return (
                                             <div className="card card-result-sub" key={id}>
                                                 {option.votes.includes(author.id) && 
                                                 <span className="your-vote">Your vote</span>
                                                 }
                                                 <p>Would you rather {option.text}?</p>
                                                 <div className="progress-bar">
                                                     <div className="percentage" 
                                                     style={{height: "25px", 
                                                     background: "#422EA6",
                                                     width: `${percentage}`}}>
                                                         {percentage}%
                                                     </div>
                                                 </div>
                                                 <span className="vote-score">{option.votes.length} out of {allVoteCount} votes</span>
                                             </div>   
                                        );
                                     })
                                 }

                                 </div>
                            }
                        </div>
                                {/* <h6>Would you rather</h6>
                                <p>{unansweredQue.optionOne.text}</p>
                                <Link to={`/questions/${unansweredQue.id}`}><button>view poll</button></Link> */}
                        </div>
                    </div>
                    
        
                  
                
        </div>

        </section>
        </>
    )
}


export default connect()(DashboardPolls);