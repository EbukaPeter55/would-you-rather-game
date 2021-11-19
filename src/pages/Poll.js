import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { handleSaveAnswers } from '../actions/shared';
import { voteForQuestion } from '../actions/questions';
import { chooseUserById, selectAuthenticatedUser, chooseOptionsForQuestions } from '../selectors';


const Poll = ({dispatch, question}) => {
    const { id } = useParams();
    console.log(question);
    const asked = useSelector(chooseUserById(question.author)); 
    const {options,  allVoteCount} = useSelector(chooseOptionsForQuestions(id));
    const author = useSelector(selectAuthenticatedUser);
    const [RadioButtonVal, setCurrentValue] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const totalVotes = options.reduce((acc, cur) => {
        return acc.concat(cur.votes)
    }, []);


        useEffect(() => {
    if(totalVotes.includes(author.id)){
        setIsAnswered(true);
    }
    });

        
    const handleSubmit = (e) => {
     e.preventDefault();

     dispatch(handleSaveAnswers({authedUser: author.id, qid: question.id, 
        answer: RadioButtonVal}));
     dispatch(voteForQuestion({authedUser: author.id, qid: id,
         answer: RadioButtonVal}));
    };


    const [disable, setDisable] = React.useState(true);


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
                                    defaultChecked={RadioButtonVal === question.optionOne.text}
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
                                    defaultChecked={RadioButtonVal === question.optionOne.text}
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
                                                    <div className="progress-bar"                                                >
                                                        <span className="percentage" 
                                                        style={{height: "25px", 
                                                        background: "#422EA6",
                                                        width: `${percentage}%`}}>
                                                            {percentage}%
                                                        </span>
                                                    </div>
                                                    <span className="vote-score">{option.votes.length} out of {allVoteCount} votes</span>
                                                </div>   
                                        );
                                        })
                                    }

                                    </div>
                            }
                        </div>                              
                        </div>
                    </div>
                    
        
                    
                
        </div>

        </section>
        </>

    )
}


export default connect()(Poll);