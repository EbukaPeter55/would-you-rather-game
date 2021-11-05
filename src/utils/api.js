import {
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js';


  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions
    ]).then(([users, questions]) => ({
      users,
      questions
    }))
  };
  export function getQuestionsData () {
    return Promise.all([
      _getQuestions
    ]).then(([questions]) => ({
      questions
    }))
  };