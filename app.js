const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

require('dotenv').config();
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Hello')
})


app.listen(port, ()=>{
    console.log('Listening on port 5000...')
})