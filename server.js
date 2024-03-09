const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDb = require('./config/connectDb');
const PORT = 8080 || process.env.PORT;

dotenv.config();

//database call
connectDb();



const app = express();



app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//routes
//users routes
app.use('/api/v1/users', require('./routes/userRoute'))

//transections routes
app.use('/api/v1/transections', require('./routes/transectionRoutes'))


//static files
app.use(express.static(path.join( __dirname, './client/build')))
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})