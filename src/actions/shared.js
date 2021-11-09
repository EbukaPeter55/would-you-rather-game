import { _getQuestions, _getUsers } from "../utils/_DATA";
import { getUsers } from "./users";
import { getQuestions } from "./questions";


const AUTHED_ID = 'tylermcginnis'



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
