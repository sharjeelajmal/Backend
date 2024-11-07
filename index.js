const express = require ('express');
const app = express();
require('dotenv').config();
// require('./config/db')

const PORT = process.env.PORT || 8080;

app.get('/sharry', (req, res)=>{
  res.send("Sharry is Runing");
})

app.listen(PORT, ()=>{
  console.log(`Server is running on the port ${PORT}`)
})