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