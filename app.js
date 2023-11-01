require('dotenv').config();

const express = require('express')
const app = express();

const connectDB = require('./db/connect')
const userRouter = require('./routes/user')

//middleware
app.use(express.json())
app.use(express.static('./public'));

//routes
app.use('/api/v1/user',userRouter)

app.get('/', (req,res)=>{
res.send('home page')
console.log('home page');
})



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();