const express = require('express');
const ejs = require('ejs');
const app = express();
const port =3000;
const routes = require('./routes/routes');

mongoose.connect('mongodb://localhost:27017/kayiranga', { useNewUrlParser: true, useUnifiedTopology: true });


app.use =(express.json());

app.set('view engine','ejs');

app.use('/',routes);


app.listen(port,()=>{

    console.log("server is running on port 3000 ");


});