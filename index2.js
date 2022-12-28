
const express = require('express');
const app = express();
const port = 2500;

app.get('/',(req,res)=>{
    res.send('another try');
})

const user = [
    { name : 'rasel', id: 1 , profession : 'web developer'},
    { name : 'abir', id: 2 , profession : 'banker '},
    { name : 'shafik', id: 3 , profession : 'mariner'},
    { name : 'surjo', id: 4 , profession : 'job holder'}
]

app.get('/users',(req,res)=>{
    res.send(user);
})

app.listen(port,()=>{
    console.log('going in 2500');
})