const express =  require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:O1hhKgBnOguIgWz0@cluster0-0biwa.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
})

app.use(require('./routes'));

app.listen(9003)