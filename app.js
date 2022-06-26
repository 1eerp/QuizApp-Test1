const cors = require('cors');
const express = require('express');
const cool = require('cool-ascii-faces');
const port = process.env.PORT || 5000;
const app = express();

require('dotenv').config();
app.use(cors())
.get('/', (req, res) =>{
    res.send(cool());
})
.listen(port, ()=>{
    console.log('Listening on port 5000...')
});
