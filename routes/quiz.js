const express = require('express');

const{
    createQuiz,
    getAllQuiz,
    getOneQuiz,
    updateQuiz,
    deleteOneQuiz,
} = require('../controllers/quiz');

const api = express.Router();

api.route('/').get(getAllQuiz).post(createQuiz);
api.route('/:id').get(getOneQuiz).put(updateQuiz).delete(deleteOneQuiz);


module.exports = api;