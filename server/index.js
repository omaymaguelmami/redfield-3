const express =require('express')
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./db/config.js')
const userRouter = require('./db/routers/UserRouter.js')



const app = express();
const PORT = 3000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/redField')
app.use('/',express.static((__dirname + '/../redfield/dist/redfield')));

app.use("/user",userRouter)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
