import { _getQuestions, _getUsers,
     _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { getUsers, addAnswer } from "./users";
import { getQuestions } from "./questions";
import { addQuestion } from "./questions";
import { updateQuestionUser } from "./questions";





// action creator Using redux thunk middleware to get Users
export function handleGetUsers () {
    return (dispatch) => {
        return _getUsers()
        .then((users) => {
            dispatch(getUsers(users));
        })
    }
};

// action creator Using redux thunk middleware to get Questions
export function handleGetQuestions () {
    return (dispatch) => {
        return _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions));
        })
    }
};

// action creator Using redux thunk middleware to save answeres 
export function handleSaveAnswers (answer) {
    return (dispatch) => {
        return _saveQuestionAnswer(answer)
        .then(() => {
            dispatch(addAnswer(answer));
        });
    };
};

// action creator Using redux thunk middleware to add question
export function handleAddQuestion ({question, authedUser}) {
    return (dispatch) => {
        return _saveQuestion(question)
        .then((formattedQuestion) => {
            dispatch(addQuestion(formattedQuestion));
            dispatch(updateQuestionUser({authedUser: authedUser.id, question: formattedQuestion.id}));
        });
    };
};
