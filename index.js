const express = require('express');
const path = require('path');
const cors = require('cors');
const { getHouses, createHouse, removeHouse } = require('./controller.js');

const app = express();

app.use(express.json());
app.use(cors());



app.use(express.static(__dirname + '/static'));

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.delete('api/houses/:identification', removeHouse);

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
  })

app.listen(4000, () => console.log(`Server running on port 4000`))