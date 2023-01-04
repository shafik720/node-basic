
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const ObjectId = require('mongodb').ObjectId;

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
        
        // get all user
        app.get('/user',async(req,res)=>{
            const query = {} ;
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })

        // get a single user
        app.get('/user/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id : ObjectId(id)}
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        //update a user
        app.put('/user/:id', async(req, res)=>{
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = {_id : ObjectId(id)};
            const options = { upsert: true };

            const updatedDoc = {
                $set: {
                  name : updatedUser.name,
                  email : updatedUser.email
                },
              };

            const result = await userCollection.updateOne(filter, updatedDoc, options);
            res.send(result);

        })

        // add a new user
        app.post('/user', async(req, res)=>{
            const newUser = req.body;
            const result = await userCollection.insertOne(newUser);
            res.send(result) 
        })

        // delete a user
        app.delete('/user/:id', async(req, res)=>{
            const id = req.params.id;
            const query = {_id : ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })
    }
    finally{
        // await client.close();
    }
}

run().catch(console.dir);


app.listen(port, ()=>{
    console.log('trying 2nd time');
})