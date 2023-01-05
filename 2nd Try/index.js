const express = require('express');
const app = express();
const port = 5000;


app.get('/user',(req, res)=>{
    res.send('trying for second user');
})

app.listen(port,()=>{
    console.log('listening to port 5000');
})