const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const apiRouter = require('./routes/api');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', apiRouter);

app.use('/', express.static(path.join(__dirname, '../client/index.js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});
