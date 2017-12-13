const express = require('express');

const app = express();

const port = process.env.PORT || 4001;

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));
// app.use(express.static('views'));

const Routes = require('./routes/route');

app.get('/', (req, res) => {
  res.send('Hello from root route (index.js)');
});

app.use('/track', Routes); // all the routes to start from /todo/...

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
