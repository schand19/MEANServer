const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');

const url = 'mongodb+srv://sarath:schand%4019@cluster0.7v5w7.mongodb.net/mySampleDB?retryWrites=true&w=majority';
mongoose.connect(url , 
    { useNewUrlParser: true, 
      useUnifiedTopology: true, 
      serverApi: ServerApiVersion.v1 
    }).then (() =>{
        console.log("connected to atlas..");
    }).catch((error)=>{
        console.log("connected refused...", error);
    })

const app = express()

app.use(express.json())

const employeeRouter = require('./routes/employees')
app.use('/employees',employeeRouter)

app.listen(9000, () => {
    console.log('Server started')
})