
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());



// user : rasel
// pass : 15kMpBXxqfu3liKz

const uri = "mongodb+srv://rasel:15kMpBXxqfu3liKz@cluster0.0ihcm8w.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const userCollection = client.db('foodexpress').collection('all food');
        // const user = {name: 'ad sen', email :'tusar@tusar.com'};
        // const result = await userCollection.insertOne(user);
        
        // app.post('/user', async(req, res)=>{
        //     const newUser = req.body;
        //     console.log('requesting new user ', newUser);
        //     const result = await userCollection.insertOne(newUser);
        //     res.send(result);
        //     console.log(`User is installed with id : ${result.insertedId} `)
        // });
        app.post('/user', (req, res)=>{
            const newUser = req.body;
            console.log('requesting new user', newUser);
            res.send({result : 'success'})
        })
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir);


app.listen(port, ()=>{
    console.log('trying 2nd time');
})