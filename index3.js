
const express = require('express');
const app = express();
const port = 2100;let cors = require("cors");


app.use(cors());

const user = [
    { name : 'rasel', id: 1 , profession : 'web developer'},
    { name : 'abir', id: 2 , profession : 'banker '},
    { name : 'shafik', id: 3 , profession : 'mariner'},
    { name : 'surjo', id: 4 , profession : 'job holder'}
]

app.get('/',(req, res)=>{
    res.send('ok go on');
})
app.get('/users',(req,res)=>{
    res.send(user);
})
app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const users =  user.find(index=>index.id === parseInt(id));
    res.send(users);
})
app.listen(port, ()=>{
    console.log('going for 2100');
});