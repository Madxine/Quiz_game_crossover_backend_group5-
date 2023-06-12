const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    "category": { type: String},
    "question": { type: String},
    "correct_answer": { type: String},
    "incorrect_answers": { type: [String]},
      
});

module.exports = mongoose.model("Quiz", quizSchema);

