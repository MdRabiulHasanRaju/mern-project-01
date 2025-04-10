require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const authRouter = require('./router/auth-router')
const contactRouter = require('./router/contact-router')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express();

const corsOptions = {
   origin: "http://localhost:5173",
   methods: "POST, GET",
   credentials:true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/auth/',authRouter)
app.use('/api/form/',contactRouter)

app.get('/',(req,res)=>{
    return res.status(200).send('Hello, This is Home Page');
})

app.use(errorMiddleware)

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