
const express = require('express');
const app = express();
const port = 2100;

app.get('/',(req, res)=>{
    res.send('ok go on');
})

app.listen(port, ()=>{
    console.log('going for 2100');
});