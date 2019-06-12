const express =  require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send(`Hello world ${req.query.name}!!`);
})

app.listen(9003)