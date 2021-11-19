import React from 'react';
import { connect, useSelector } from 'react-redux';
import { selectAlteredUsers } from '../selectors';



const Leaderboard = () => {
const users = useSelector(selectAlteredUsers());

        return (
            <section>
            <h1>Leader board</h1>

            {
                users.map(user => (
                    <div key={user.id} className="card leaderboard-card d-flex
                     justify-content-evenly">
                        <img className="rounded-circle" src={user.avatarURL} alt="avatar"/>
                        <div className="result ">
                            <h3>{user.name}</h3>
                            <div className="lead-body-content">
                            <li className="d-flex justify-content-left"><h6>Answered question</h6> 
                             <span>{Object.keys(user.answers).length}</span></li>
                             <hr className="leaderboard-line"/>
                             <li className="d-flex justify-content-left"><h6>Created questions</h6> 
                             <span>{Object.keys(user.questions).length}</span></li>
                             </div>
                        </div>
                        <div className="score card">
                        <h5 className="text-center">Score</h5>
                        <hr className="score-line"/>
                        <span className="text-center">{user.totalScore}</span>
                        </div>
                        
                    </div>

                ))
            }
            </section>
        )
    
}


export default connect()(Leaderboard);