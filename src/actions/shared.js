import { _getQuestions, _getUsers,
     _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { getUsers, addAnswer } from "./users";
import { getQuestions } from "./questions";
import { addQuestion } from "./questions";
import { updateQuestionUser } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';







// action creator Using redux thunk middleware to get Users
export function handleGetUsers () {
    return (dispatch) => {
        dispatch(showLoading()) //Dispatches the loading bar once we load the component
        return _getUsers()
        .then((users) => {
            dispatch(getUsers(users));
            dispatch(hideLoading());
        })
    }
};

// action creator Using redux thunk middleware to get Questions
export function handleGetQuestions () {
    return (dispatch) => {
        dispatch(showLoading()) //Dispatches the loading bar once we load the component
        return _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions));
            dispatch(hideLoading());
        })
    }
};

// action creator Using redux thunk middleware to save answeres 
export function handleSaveAnswers (answer) {
    return (dispatch) => {
    dispatch(showLoading())
        return _saveQuestionAnswer(answer)
        .then(() => {
            dispatch(addAnswer(answer));
        })
        .then(() => dispatch(hideLoading()))

            };
        };

// action creator Using redux thunk middleware to add question
export function handleAddQuestion ({question, authedUser}) {
    return (dispatch) => {
    dispatch(showLoading())
        return _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(updateQuestionUser({authedUser: authedUser.id, question: formattedQuestion.id}));
        })
        .then(() => dispatch(hideLoading()))
    };
};
