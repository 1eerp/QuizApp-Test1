const cors = require('cors');
const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces');

const port = process.env.PORT || 5000;
const app = express();

require('dotenv').config();
app.use(cors())
.use(express.static(path.join(__dirname, "/client/build")))
.get('/cool', (req, res)=>{
    res.send(cool());
})
.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
.listen(port, ()=>{
    console.log('Listening on port 5000...')
});
