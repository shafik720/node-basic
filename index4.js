const express = require('express');
const app = express();
const port = 3200;
let cors = require('cors');

app.use(cors());
app.use(express.json());

const user = [
    { name : 'rasel', id: 1 , profession : 'web developer'},
    { name : 'abir', id: 2 , profession : 'banker '},
    { name : 'shafik', id: 3 , profession : 'mariner'},
    { name : 'surjo', id: 4 , profession : 'job holder'}
]

app.get('/',(req, res)=>{
    res.send('got it ');
})

app.get('/user',(req, res)=>{
    res.send(user);
})

app.post('/user',(req, res)=>{
    const newUser = req.body;
    newUser.id = user.length + 1 ;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log('listening to port 3200');
})
