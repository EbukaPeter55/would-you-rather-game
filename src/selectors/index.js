import { useHistory } from 'react-router';
import { createSelector } from 'reselect';




const selectEveryQuestion = state => state.questions;
const selectEveryUsers = state => state.users;

export const selectAuthenticatedUser = state => state.authedUser;


export const questionsById = (id) => createSelector(selectEveryQuestion, (questions) => {
    // initialized unanswered and answered questions into an empty aray
    const answeredQuestions = [];
    const unansweredQuestions = [];
    Object.keys(questions).forEach(questionId => {
        const {optionOne, optionTwo } = questions[questionId];
        if(optionOne.votes.includes(id) || optionTwo.votes.includes(id)){
            answeredQuestions.push(questions[questionId]);
        }else {
            unansweredQuestions.push(questions[questionId]);

        }
    });
    return {
        answeredQuestions: answeredQuestions.sort((a, b) => b.timestamp - a.timestamp),
        unansweredQuestions: unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
    };
});

export const selectUsersWithSomeInfo = createSelector (selectEveryUsers, (users) => {
    const alteredUsers = Object.keys(users).reduce((acc, cur) => {
        const {name, id, avatarURL, answers } = users[cur];
        acc[cur] = {name, id, avatarURL, answers};
        return acc;
    }, {});
    return alteredUsers;
})

// Select questions by Id
export const chooseQuestionById = (id) => createSelector (selectEveryQuestion, (questions)=>{
    const question = questions[id];
    return question;
});

// Select users by Id
export const chooseUserById = (id) => createSelector(selectEveryUsers, users => (users[id])); 

// Select Options for a particular question
export const chooseOptionsForQuestions = (id) => createSelector(chooseQuestionById(id),
    question => {
        return {options: [question.optionOne, question.optionTwo], 
            allVoteCount: question.optionOne.votes.length + question.optionTwo.votes.length };
    });

// Select formatted users
export const selectAlteredUsers = () => createSelector(selectEveryUsers, users => {
const values = Object.values(users);
const formattedUsers = values.reduce((acc, cur) => {
    const totalScore = cur.questions.length + Object.keys(cur.answers).length;
    cur.totalScore = totalScore;
    acc.push(cur);
    return acc;
}, []);
return formattedUsers.sort((a,b) => b.totalScore - a.totalScore);
} );