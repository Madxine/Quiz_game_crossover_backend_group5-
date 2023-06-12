const Quiz = require('../schemas/Quiz');



//***********create quiz***********
const createQuiz = async(req, res)=>{
    try{
        const { 
            category,
            question,
            correct_answer,
            incorrect_answers
        } = req.body;
        const quiz = await Quiz.create( {
            category,
            question,
            correct_answer,
            incorrect_answers
        });
        res.status(201).json({data:quiz});
    }catch(err){
        res.status(500).json({err})
    }
};

//***********get all quiz***********
const getAllQuiz = async(req, res) =>{
    try{
    const quizs = await Quiz.find();
    !quizs.length? res.status(200).json({msg:"No such quiz in DB"}):
    res.status(200).json({data:quizs});
    }catch(err){
    res.status(500).json({err})
    }
    };
    

//***********get one quiz*********** 
const getOneQuiz = async(req, res)=>{
    try{
        const { id } = req.params;
        const quiz = await Quiz.findById(id);
        quiz? res.status(200).json({data:quiz}):
        res.status(404).json({msg: 'No such Quiz'})
    }catch(err){
        res.status(500).json({err})
    }
};

//***********update quiz***********
const updateQuiz = async(req, res)=>{
    try{const { id } = req.params;
    const {
        category,
        question,
        correct_answer,
        incorrect_answers
    } = req.body;
   
    const quiz = await Quiz.findByIdAndUpdate(
        id,
        {
            category,
            question,
            correct_answer,
            incorrect_answers
        },
        {
            new: true
        }
        );
    quiz? res.status(200).json({msg:'Quiz updated successfully', data: quiz}):
    res.status(404).json({msg: 'No such Quiz'})
    }catch(err){
        res.status(500).json({err})
}
};


//***********delete quiz*************
const deleteOneQuiz = async(req, res)=>{
    try{const { id } = req.params;
    const quiz  = await Quiz.findByIdAndDelete(id);
    quiz? res.status(200).json({msg:'Quiz deleted', data: quiz}):
    res.status(404).json({msg: 'No such Quiz'})
    }catch(err){
        res.status(500).json({err})
    }
};

module.exports = {
    createQuiz,
    getAllQuiz,
    getOneQuiz,
    updateQuiz,
    deleteOneQuiz,
};