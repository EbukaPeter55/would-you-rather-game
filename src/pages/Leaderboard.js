import React from 'react';
import Nav from '../components/Nav';
import { connect, useSelector } from 'react-redux';
import { selectAlteredUsers } from '../selectors';



const Leaderboard = () => {
const users = useSelector(selectAlteredUsers());

        return (
            <section>
            <Nav/>
            <h1>Leader board</h1>

            {
                users.map(user => (
                    <div key={user.id} className="card leaderboard-card ">
                        <img className="rounded-circle" src={user.avatarURL} alt="avatar"/>
                        <div className="result">
                            <h3>{user.name}</h3>
                            <li><h6>Answered question</h6> 
                             <span>{Object.keys(user.answers).length}</span></li>
                             <hr/>
                             <li><h6>Created questions</h6> 
                             <span>{Object.keys(user.questions).length}</span></li>
                        </div>
                        <div className="score">
                        <h5>Score</h5>
                        <span>{user.totalScore}</span>
                        </div>
                        
                    </div>

                ))
            }
            </section>
        )
    
}


export default connect()(Leaderboard);