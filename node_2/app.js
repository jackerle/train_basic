const express = require('express');
const worker = require('./worker');
const app = express();
const path = require('path');
app.use(express.urlencoded());
app.use(express.json());


app.get('/getAll', (req, res) => {
    let response = worker.getAllFood();
    res.send(response);
})

app.get('/getFood',(req,res)=>{

    let id = req.query.id;

    let response = worker.getFoodFromID(id);
    res.send(response);

});

app.post('/getFood',(req,res)=>{

    let id = req.body.id;

    let response = worker.getFoodFromID(id);
    res.send(response);

})


app.get('/getFoodSearch',(req,res)=>{

    let keyword = req.query.keyword;

    let response = worker.getSearchFood(keyword);
    res.send(response);

});

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.listen(8080,()=>{
    console.log('Open success');
})