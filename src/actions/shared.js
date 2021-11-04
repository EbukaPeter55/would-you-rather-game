import { getInitialData } from "../utils/api";
import { getUsers } from "./users";
import { getQuestions } from "./questions";



// action creator Using redux thunk middleware
export function handleInitialData () {

    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            // dispatch(setAuthedUser(AUTHED_ID));
        })
    }
};