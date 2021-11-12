export const GET_QUESTIONS = 'GET_QUESTIONS'
export const VOTE_FOR_QUESTION = 'VOTE_FOR_QUESTION';

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const voteForQuestion = (vote) => {
    return {
        type: VOTE_FOR_QUESTION,
        vote
    };
}