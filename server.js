const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(port, () => console.log(`Listening on port ${port}`));
