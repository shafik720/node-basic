const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

// using mongodb here

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://rasel:QJcHAVAcEsRn6ymq@cluster0.0ihcm8w.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





app.get('/', (req, res)=>{
    res.send('hellow');
})



async function run() {
    try {      
      const userCollection = client.db('2ndTime').collection('foods');

      // adding a user
      app.post('/user',async(req, res)=>{
        const user = req.body;        
        const result = await userCollection.insertOne(user); 
        res.send(result);
    
    })

    // finding all user 
    app.get('/user', async(req, res)=>{
        const query = {};
        const cursor = userCollection.find(query);
        const result = await cursor.toArray();
        res.send(result);
    })

    //find a user
    app.get('/user/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id : ObjectId(id)};
        const result = await userCollection.findOne(query);
        res.send(result);
    })

    // delete a user
    app.delete('/user/:id', async(req, res)=>{
        const id = req.params.id;
        const query = {_id : ObjectId(id)};
        const result = await userCollection.deleteOne(query);
        res.send(result);
    })

    // update a user
    app.put('/user/:id', async(req, res)=>{
        const id = req.params.id;
        const users = req.body;
        const filter = {_id : ObjectId(id)};
        const options = { upsert: true };
        const updatedDoc = {
            $set: {
              name : users.name,
              email : users.email
            },
          };
        const result = await userCollection.updateOne(filter, updatedDoc, options);
        res.send(result);
    })


    } finally {
    //   await client.close();
    }
  }

  run().catch(console.dir);




app.listen(port,()=>{
    console.log('listening to port 5000');
})