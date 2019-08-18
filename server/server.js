const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/routes');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/src/views'));

app.use(routes);

app.listen(port, () => console.log(`App listening on port 3000!`));
