export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export const addAnswer = (answer) => {
    return {
        type: SAVE_ANSWER,
        payload: answer
    }
}

