require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const router = require('./router/auth-router')

const app = express();

app.use(express.json())
app.use('/api/auth/',router)

app.get('/',(req,res)=>{
    return res.status(200).send('Hello, This is Home Page');
})

const URI = process.env.DBLINK
const PORT = process.env.PORT || 8080;

mongoose.connect(URI)
.then(() => {
    console.log("Database Connected.");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });