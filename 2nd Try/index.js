const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/user',(req, res)=>{
    const user = req.body;
    res.send(user);
})

app.get('/', (req, res)=>{
    res.send('hellow');
})


app.listen(port,()=>{
    console.log('listening to port 5000');
})