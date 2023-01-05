const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

// using mongodb here

const { MongoClient, ServerApiVersion } = require('mongodb');
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

    // finding a user 
    app.get('/user', async(req, res)=>{
        const query = {};
        const cursor = userCollection.find(query);
        const users = await cursor.toArray();
        res.send(users);
    })
    } finally {
    //   await client.close();
    }
  }

  run().catch(console.dir);




app.listen(port,()=>{
    console.log('listening to port 5000');
})