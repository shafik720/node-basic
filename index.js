
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send('another 2nd try');
})

// user : rasel
// pass : Bwv139VgeyUuFiAC

const uri = "mongodb+srv://rasel:Bwv139VgeyUuFiAC@cluster0.0ihcm8w.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        await client.connect();
        const userCollection = client.db('foodexpress').collection('all food');
        const user = {name: 'Abir Rahman', email :'abir@gmail.com'};
        const result = await userCollection.insertOne(user);

        console.log(`User is installed with id : ${result.insertedId} `)
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir);


app.listen(port, ()=>{
    console.log('trying 2nd time');
})