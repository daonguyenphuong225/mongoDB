const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')
const mongoose = require('./config/mongo-connection');

app.use(bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf
    }
  }))
app.use('/api/post',postRouter)
app.use('/api/user',userRouter)



app.listen(3000,()=>{
    console.log('server abc chay cong 3000');
})




