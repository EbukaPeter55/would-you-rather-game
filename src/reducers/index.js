import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';



export default combineReducers ({
    authedUser,
    users,
    questions,
    // loadingBar: loadingBarReducer //Add loading bar as part of the state in our redux store
})