const express = require('express');

const app = express();

const port = process.env.PORT || 4001;

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/views`));
app.use(express.static(`${__dirname}/public`));

const Routes = require('./routes/route');

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api/projects', Routes); // all the routes to start from /todo/...

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
