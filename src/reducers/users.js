import { GET_USERS, SAVE_ANSWER, SET_USER } from '../actions/users';
import {   UPDATE_QUESTION_USER } from '../actions/questions';

export default function users ( state = {}, action ) {
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                ...action.users
            };
        case SET_USER:
            return {
                ...state,
                ...action.user
            };
        case SAVE_ANSWER:
            return {
                ...state,
                [action.payload.authedUser]:{
                ...state[action.payload.authedUser],
                answers: { ...state[action.payload.authedUser].answers,
                     ...{[action.payload.qid]: action.payload.answer}}
                }
            };
        case UPDATE_QUESTION_USER:
            return {
                ...state,
                [action.payload.authedUser]:{
                ...state[action.payload.authedUser],
                questions: 
                [...state[action.payload.authedUser].questions,
                action.payload.question]
                }
            }
            default:
                return state;
    }
}