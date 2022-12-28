const express = require('express');
const app = express();
const port = 2500;

app.get('/',(req,res)=>{
    res.send('ok got it');
})


app.listen(port,()=>{
    console.log('listening to port 2500');
})