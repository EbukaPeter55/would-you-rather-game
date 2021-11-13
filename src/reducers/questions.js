import { GET_QUESTIONS, ADD_QUESTION, VOTE_FOR_QUESTION } from '../actions/questions';


export default function questions ( state = {}, action ) {
    switch (action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                ...{[action.question.id]: action.question}
            };
        case VOTE_FOR_QUESTION:
            return {
                ...state,
                [action.vote.qid]: {
                    ...state[action.vote.qid],
                [action.vote.answer]: {
                    ...state[action.vote.qid][action.vote.answer],
                    votes: [...state[action.vote.qid][action.vote.answer].votes,
                    action.vote.authedUser]
                }
                }
            };
            default:
                return state;
    }
}