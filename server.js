//create dependencies
const express = require("express"); 
const path = require("path");
const mysql = require("mysql"); 
const bodyParser = require("body-parser"); 
const app = express();
const PORT = 3000;

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YOUR PASSWORD TO YOUR DATABASE',
    database: 'bamazon'
});

// Allow boy barser to parse the data 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());  
// Allow the assets folder to be used for static content 
// app.use("/assets", express.static("assets")); 
app.use(express.static('app'));

app.use("/", function(req, res){
    res.sendFile(path.join(__dirname+'/app/public/home.html'));
})
app.use("/survey", function(req, res){
    res.sendFile(path.join(__dirname+'/app/public/survey.html'))
});

// // Create some routers 
// require("./routes/appRoutes")(app); 
// require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {console.log("APP is listening on Port: " + PORT); });

