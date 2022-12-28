
const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req, res)=>{
    res.send('another 2nd try');
})

const user = [
    { name : 'rasel', id: 1 , profession : 'web developer'},
    { name : 'abir', id: 2 , profession : 'banker '},
    { name : 'shafik', id: 3 , profession : 'mariner'},
    { name : 'surjo', id: 4 , profession : 'job holder'}
]

app.get('/users',(req, res)=>{
    res.send(user[2]);
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    res.send( user[id]);
})

app.listen(port, ()=>{
    console.log('trying 2nd time');
})