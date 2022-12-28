
const express = require('express');
const app = express();
const port = 2500;

app.get('/',(req,res)=>{
    res.send('another try');
})

app.listen(port,()=>{
    console.log('going in 2500');
})