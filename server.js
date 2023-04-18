const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(cors());
app.use(express.json());



app.use(express.static(path.join(__dirname,"frontend", 'build')));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} .`);
  });