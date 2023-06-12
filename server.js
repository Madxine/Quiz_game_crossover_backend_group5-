const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const connectDB = require('./dbinit');
require("colors");
const quiz = require("./routes/quiz")

connectDB();

//***********middleware***********
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next)=>{console.log(req.path, req.method), next();})


//***********routes***********
app.use('/quiz', quiz);

app.get("/",(req,res)=>{
    res.send("Welcome to our API, go to /quiz for fetching the data")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/ `.bgCyan)
})